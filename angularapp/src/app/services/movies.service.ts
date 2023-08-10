import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Movie } from '../models/movie.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseApiUrl+'/api/Movies/Movies');
  }

  getMovie(movie: Movie): Observable<Movie>{
    const url = `${this.baseApiUrl}/api/Movies/Movies/${movie.id}`;
    return this.http.get<Movie>(url, httpOptions);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const url = `${this.baseApiUrl}/api/Movies/Movies/Edit/${movie.id}`;
    return this.http.put<Movie>(url, movie, httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    const url = `${this.baseApiUrl}/api/Movies/Movies/Add`;
    return this.http.post<Movie>(url, movie, httpOptions);
  }

  deleteMovie(id: number): Observable<Movie> {
    const url = `${this.baseApiUrl}/api/Movies/Movies/Delete/${id}`;
    return this.http.delete<Movie>(url, httpOptions);
  }
}
