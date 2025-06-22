import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/colors.css";

import App from "./app";
import { getTicket, calculatePrice } from "./parkingMachine";

// Expose getTicket and calculatePrice globally for developer console
// @ts-ignore
window.getTicket = getTicket;
// @ts-ignore
window.calculatePrice = calculatePrice;

ReactDOM.render(<App />, document.getElementById("root"));
