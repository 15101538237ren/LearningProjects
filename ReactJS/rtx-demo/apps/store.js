const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
  formatter: (action) => JSON.stringify(action.payload),
  logErrors: true,
});

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
