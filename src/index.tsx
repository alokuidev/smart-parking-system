import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/colors.css";

import App from "./app";
import { getTicket, calculatePrice, payTicket } from "./parkingMachine";

// Expose getTicket, calculatePrice, and payTicket globally for developer console
// @ts-ignore
window.getTicket = getTicket;
// @ts-ignore
window.calculatePrice = calculatePrice;
// @ts-ignore
window.payTicket = payTicket;

ReactDOM.render(<App />, document.getElementById("root"));
