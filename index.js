import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement(
  "h1",
  { style: { color: "red" }, id: "header", title: "header" },
  "Hello React"
);

const container = React.createElement(
  "div",
  { id: "container", className: "container" },
  element,
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "First item"),
    React.createElement("li", null, "Second item"),
    React.createElement("li", null, "Third item")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
