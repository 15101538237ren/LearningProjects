const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");

//create new product => /api/v1/admin/product/new

exports.newProduct = AsyncErrorHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product: product,
  });
});

//Get all products => GET /api/v1/products
exports.getProducts = AsyncErrorHandler(async (req, res, next) => {
  let resPerPage = 9;
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  const products = await apiFeatures.query;

  const totalProductCount = await Product.countDocuments();

  res.status(200).json({
    success: true,
    count: products.length,
    products: products,
    totalProductCount: totalProductCount,
  });
});

//Get single product details => GET /api/v1/product/:id
exports.getSingleProduct = AsyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  } else {
    return res.status(200).json({
      success: true,
      product: product,
    });
  }
});

//Update a Product => PUT /api/v1/admin/product/:id
exports.updateProduct = AsyncErrorHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  } else {
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      product: product,
    });
  }
});

//Delete a Product => DELETE /api/v1/admin/product/:id
exports.deleteProduct = AsyncErrorHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  } else {
    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product is deleted",
    });
  }
});

// Create new review   =>  /api/v1/review/new
exports.createProductReview = AsyncErrorHandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    review,
  });
});

// Get Product Reviews   =>   /api/v1/reviews/:productId
exports.getProductReviews = AsyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }
  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Product Review   =>   /api/v1/reviews/:productId/:id
exports.deleteReview = AsyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  console.log(product);

  const reviews = product.reviews.filter(
    (review) => review._id.toString() !== req.params.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    numOfReviews == 0
      ? 0
      : product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        reviews.length;

  await Product.findByIdAndUpdate(
    req.params.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "The review has been deleted",
  });
});
