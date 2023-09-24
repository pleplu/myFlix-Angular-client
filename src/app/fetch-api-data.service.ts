import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://my-flix-8675-e6ac611a51d9.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(newUserDetails: any): Observable<any> {
    console.log(newUserDetails);
    return this.http.post(apiUrl + 'users', newUserDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class UserLoginService {

  constructor(private http: HttpClient) {
  }

  public userLogin(loginDetails: any): Observable<any> {
    return this.http.post(apiUrl + 'login/', loginDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class GetAllMoviesService {

  constructor(private http: HttpClient) {
  }

  public getAllMovies(token: any): Observable<any> {
    return this.http.get(apiUrl + 'movies', token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class GetMovieService {

  constructor(private http: HttpClient) {
  }

  public getMovie(token: any, title: any): Observable<any> {
    return this.http.get(apiUrl + 'movies/' + title, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class GetDirectorService {

  constructor(private http: HttpClient) {
  }

  public getDirector(token: any, director: any): Observable<any> {
    return this.http.get(apiUrl + 'movies/directors/' + director, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class GetGenreService {

  constructor(private http: HttpClient) {
  }

  public getGenre(token: any, genre: any): Observable<any> {
    return this.http.get(apiUrl + 'movies/genres/' + genre, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

// Will also display an array of the users favorites movies
export class GetUserService {
 
  constructor(private http: HttpClient) {
  }

  public getUser(token: any, username: any): Observable<any> {
    return this.http.get(apiUrl + 'users' + username, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class AddFavoriteService {

  constructor(private http: HttpClient) {
  }

  public addFavorite(username: any, movie: any, token: any): Observable<any> {
    return this.http.post(apiUrl + 'users/' + username + 'movies/' + movie, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class EditUserService {

  constructor(private http: HttpClient) {
  }

  public editUser(userDetails: any, username: any, token: any): Observable<any> {
    console.log(userDetails);
    return this.http.put(apiUrl + 'users/' + username, userDetails, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class DeleteUserService {

  constructor(private http: HttpClient) {
  }

  public deleteUser(username: any, token: any): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + username, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

// --------------------------------------------------------------------------------------------------------------------------

export class RemoveFavoriteService {

  constructor(private http: HttpClient) {
  }

  public removeFavorite(username: any, movie: any, token: any): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + username + 'movies/' + movie, token).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}