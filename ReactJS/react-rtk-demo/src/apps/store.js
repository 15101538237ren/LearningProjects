import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

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
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
