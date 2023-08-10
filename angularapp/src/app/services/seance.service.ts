import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seance } from '../models/seance.model';
import { ResponseMessage } from '../models/responseMessage';
import { Observable } from 'rxjs';
import { Seat } from '../models/seat.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  public addSeance(seance: Seance): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>(this.baseApiUrl+'/api/Seances/Seances/Add', seance);
  }

  public addSeats(seats: Seat[]): Observable<Seat[]>{
    return this.http.post<Seat[]>(this.baseApiUrl+'/api/Seats', seats);
  }

  public getSeanceById(id: number): Observable<Seance>{
    return this.http.get<Seance>(this.baseApiUrl+`/api/Seances/Seances/${id}`);
  }

  public updateSeance(seance: Seance){
    return this.http.post<Seance>(this.baseApiUrl+`/api/Seances/Seances/Edit`, seance);
  }

  public deleteSeance(id: number): Observable<{}>{
    return this.http.delete<Seance>(this.baseApiUrl+`/api/Seances/Seances/Delete/${id}`);
  }
}
