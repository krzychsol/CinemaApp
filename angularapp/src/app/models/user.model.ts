import { Reservation } from "./reservation.model";

export interface User {
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    isAdmin: boolean,
    reservations?: Reservation[]
}