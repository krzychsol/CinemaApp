import { Reservation } from "./reservation.model";

export interface Seat{
    id: number,
    number: number,
    isFree: boolean,
    isChoosed: boolean,
    reservations: Reservation,
  }