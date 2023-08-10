import { Seance } from "./seance.model";

export interface Ticket{
    id: number,
    price: number,
    seance: Seance,
  }