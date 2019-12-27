import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactGA from "react-ga";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

ReactGA.initialize("UA-155089614-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
