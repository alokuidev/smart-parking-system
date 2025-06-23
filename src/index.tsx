import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/colors.css";

import App from "./app";
import { getTicket, calculatePrice, payTicket, getTicketState } from "./parkingMachine";

// Expose getTicket, calculatePrice, payTicket, and getTicketState globally for developer console
// @ts-ignore
window.getTicket = getTicket;
// @ts-ignore
window.calculatePrice = calculatePrice;
// @ts-ignore
window.payTicket = payTicket;
// @ts-ignore
window.getTicketState = getTicketState;

ReactDOM.render(<App />, document.getElementById("root"));
