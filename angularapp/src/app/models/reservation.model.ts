import { Seance } from "./seance.model";
import { Seat } from "./seat.model";
import { User } from "./user.model";

export interface Reservation{
    id: number,
    bookedSeance: Seance,
    seats: Seat[],
    isReturnable: boolean,
    user: User;
  }