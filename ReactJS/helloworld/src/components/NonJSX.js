import React from "react";

const JSXVersion = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const NonJSX = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello")
  );
};

export default { JSXVersion, NonJSX };
