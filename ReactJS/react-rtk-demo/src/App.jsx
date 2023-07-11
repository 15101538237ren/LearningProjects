import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";

import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ color: "green" }}>React Redux Toolkit Demo</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
