import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  return ce(
    "div",
    { id: "my-frst-component" },
    ce(MyTitle, { title: "Game of Thrones", color: "YellowGreen" }),
    ce(MyTitle, { title: "Stanger Things", color: "GreenYellow" }),
    ce(MyTitle, { title: "Breaking Bad", color: "LimeGreen" }),
    ce(MyTitle, { title: "House of Cards", color: "Lime" })
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
