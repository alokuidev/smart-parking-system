import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/colors.css";

import App from "./app";
import { getTicket, calculatePrice, payTicket, getTicketState, getFreeSpaces } from "./parkingMachine";

// Expose getTicket, calculatePrice, payTicket, and getTicketState globally for developer console
// @ts-ignore
window.getTicket = getTicket;
// @ts-ignore
window.calculatePrice = calculatePrice;
// @ts-ignore
window.payTicket = payTicket;
// @ts-ignore
window.getTicketState = getTicketState;
// @ts-ignore
window.getFreeSpaces = getFreeSpaces;

ReactDOM.render(<App />, document.getElementById("root"));
