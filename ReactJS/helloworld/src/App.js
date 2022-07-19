import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="U">
          <p>This is a children element</p>
        </Greet>

        <Greet name="X"></Greet>

        <Greet name="Y"></Greet>

        <Welcome name="Z">
          <p>Here is a new chilren</p>
        </Welcome>
        <Counter/>
        <EventBind  />
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
