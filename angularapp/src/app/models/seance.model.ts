import { Movie } from "./movie.model";
import { Seat } from "./seat.model";

export interface Seance{
    id: number,
    startDate: Date,
    endDate: Date,
    movie: Movie,
    seats: Seat[],
  }