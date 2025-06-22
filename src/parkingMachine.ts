// Ticket type definition
export type Ticket = {
  barcode: string;
  issuedAt: number; // timestamp in ms
  paidAt?: number;
  paymentMethod?: string;
};

const TICKETS_KEY = 'parking_tickets';
const PARKING_SPACES = 54;

function loadTickets(): Ticket[] {
  const data = localStorage.getItem(TICKETS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTickets(tickets: Ticket[]) {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

function generateBarcode(): string {
  let barcode = '';
  for (let i = 0; i < 16; i++) {
    barcode += Math.floor(Math.random() * 10).toString();
  }
  return barcode;
}

export function getTicket(): Ticket | null {
  const tickets = loadTickets();
  if (tickets.length >= PARKING_SPACES) {
    alert('Parking lot full!');
    return null;
  }
  let barcode: string;
  do {
    barcode = generateBarcode();
  } while (tickets.some(t => t.barcode === barcode));
  const ticket: Ticket = {
    barcode,
    issuedAt: Date.now(),
  };
  tickets.push(ticket);
  saveTickets(tickets);
  return ticket;
}

// For debugging/testing
export function getAllTickets(): Ticket[] {
  return loadTickets();
}

export function calculatePrice(barcode: string): number {
  const tickets = loadTickets();
  const ticket = tickets.find(t => t.barcode === barcode);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  const now = Date.now();
  const durationMs = now - ticket.issuedAt;
  const hours = Math.ceil(durationMs / (1000 * 60 * 60));
  return hours * 2;
} 