import { Seance } from "./seance.model";

export interface CinemaHall{
  id: number,
  openDate: Date,
  closeDate: Date,
  seances: Seance[],
}