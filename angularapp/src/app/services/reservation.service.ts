import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { CreateReservationDto } from '../models/createReservationDto';
import { Observable } from 'rxjs';
import { ErrorMessage } from '../models/errorMessage';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public addReservation(createReservationDto: CreateReservationDto): Observable<Reservation>{
    return this.http.post<Reservation>('Reservations/Reservations/Add', createReservationDto);
  }

  public deleteReservation(id: number): Observable<ErrorMessage>{
    return this.http.delete<ErrorMessage>(`Reservations/Reservations/Delete/${id}`);
  }
}
