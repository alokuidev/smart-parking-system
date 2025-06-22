import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/colors.css";

import App from "./app";
import { getTicket } from "./parkingMachine";

// Expose getTicket globally for developer console
// @ts-ignore
window.getTicket = getTicket;

ReactDOM.render(<App />, document.getElementById("root"));
