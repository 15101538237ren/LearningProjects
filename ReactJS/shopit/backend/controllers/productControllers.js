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
  let resPerPage = 3;
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
