import { Injectable } from '@angular/core';
import { User } from './user';
import { Personne } from './personne';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public static token_key = 'access_token';
  public static token_current_user = 'current_user';
  endpoint = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: User;

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    const api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  personneSignUp(personne: Personne): Observable<any> {
    const api = `${this.endpoint}/ajout-personne-carte`;
    return this.http.post(api, personne)
      .pipe(
        catchError(this.handleError)
      );
  }


  update(user: User): Observable<any> {
    const id = user._id;
    const api = `${this.endpoint}/update-user/${id}`;
    return this.http.put(api, user).pipe(
        catchError(this.handleError)
      );
  }


  // Delete
  delete(user: User): Observable<any> {
    const id = user._id;
    const api = `${this.endpoint}/delete-user/${id}`;
    return this.http.delete(api, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }


  // Sign-in
  signIn(user: User): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/signin`, user);
  }

  public getToken() {
    return localStorage.getItem(AuthService.token_key);
  }

  public setToken(token: any) {
    localStorage.setItem(AuthService.token_key, token);
  }

  public isLoggedIn(): boolean {
    const authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile
  public getUserProfile(id): Observable<any> {
    const api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  public getUserPersonne(id): Observable<any> {
    const api = `${this.endpoint}/ajout-personne-carte/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);

    return throwError(msg);
  }

  public setCurrentUser(user: User) {
    this.currentUser = new User(user.email, '', user._id, user.name);
    console.log(user);
    localStorage.setItem(AuthService.token_current_user, user._id.valueOf());
  }

  public getCurrentUserId() {
    if (!this.currentUser && !this.currentUser._id) {
      return this.currentUser._id;
    }
    return localStorage.getItem(AuthService.token_current_user);
  }
}
