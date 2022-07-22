const dotenv = require("dotenv");
//Set up config file
dotenv.config({ path: "backend/config/config.env" });

//Handle uncaught Exceptions
process.on(`uncaughtException`, err => {
  console.log(`ERROR: ${err.message}`);
  console.log(`shutting down the server due to uncaught Exceptions`);
  process.exit(1);
});


const connectDB = require("./config/database");
connectDB();

const app = require("./app");
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle unhandled Promise rejections
process.on(`unhandledRejection`, (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
