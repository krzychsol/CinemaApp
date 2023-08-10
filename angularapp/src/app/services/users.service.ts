import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../models/user.model';
import { ResponseMessage } from '../models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;
  user?: User;

  constructor(private http: HttpClient) { }
  
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl+'/api/Users/Users', user);
  }

  public editUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseApiUrl+'/api/Users/Users/Edit', user);
  }

  public register(user: User): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(this.baseApiUrl+'/api/Users/register', user);
  }

  public saveUser(user: User){
    this.user = user;
    console.log(this.user);
    console.log(user);
    sessionStorage.setItem('current-app-user', JSON.stringify(user));
  }

  public saveToken(token: string){
    sessionStorage.setItem('current-app-token', token);
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl+'/api/Users/Users');
  }

  public getById(id: number): Observable<User>{
    return this.http.get<User>(this.baseApiUrl+`api/Users/Users/${id}`)
  }

  public getUser(): User{
    var user = JSON.parse(sessionStorage.getItem('current-app-user') || '{}');
    if(this.user){
      this.user = user
    }
    return user;
  }

  public auth(user: User): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>(this.baseApiUrl+'/api/Users/login',user);
  }

  logout() {
    this.user = undefined;
    sessionStorage.removeItem('current-app-token');
    sessionStorage.removeItem('current-app-user');
  }

}
