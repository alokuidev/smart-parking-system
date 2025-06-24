# Client Developer Challenge

## Project Overview

This project is a simulation of a parking lot ticket machine for a company with 54 spaces. The application is built with React and TypeScript, using Parcel as the bundler. There is no backend; all data is persisted in the browser's localStorage.

## Features Implemented

1. **Ticket Issuance**: When a car enters, a new ticket with a unique 16-digit barcode is generated. The ticket and entry time are saved and persisted.
2. **Price Calculation**: Calculates the parking fee based on the time spent. Every started hour costs €2.
3. **Payment Processing**: Saves the payment time and method on the ticket. After payment, the price is set to 0 and a receipt is returned.
4. **Ticket State Checking**: Checks if a ticket is paid and if the car is exiting within 15 minutes of payment.
5. **Free Spaces Calculation**: Calculates and returns the number of available parking spaces (54 minus active tickets).

## Running the Application

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:1234](http://localhost:1234).
3. To create a production build:
   ```sh
   npm run build
   ```

## Using the Developer Console

The following functions are available globally in the browser developer console for testing:

- `getTicket()` – Issues a new ticket if spaces are available.
- `calculatePrice(barcode)` – Calculates the price for a given ticket barcode.
- `payTicket(barcode, paymentMethod)` – Pays for a ticket with the specified method.
- `getTicketState(barcode)` – Returns the state ('paid' or 'unpaid') of a ticket.
- `getFreeSpaces()` – Returns the number of currently available parking spaces.

## Notes
- All ticket and parking data is stored in localStorage and persists across page reloads.
- The UI allows you to simulate parking and leaving by clicking on parking spaces.

---
