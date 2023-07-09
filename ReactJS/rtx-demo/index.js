const store = require("./apps/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(cakeActions.buyCake(2));
store.dispatch(cakeActions.buyCake(3));
store.dispatch(cakeActions.restock(10));
store.dispatch(iceCreamActions.buyIceCream(2));
store.dispatch(iceCreamActions.buyIceCream(3));
store.dispatch(iceCreamActions.restock(10));
unsubscribe();
