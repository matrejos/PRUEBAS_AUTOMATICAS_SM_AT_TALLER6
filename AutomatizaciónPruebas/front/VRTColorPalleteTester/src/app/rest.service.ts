import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:3001/resemble/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getResembleJSTest(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }


  postResembleJSTest (): Observable<any> {
    return this.http.post<any>(endpoint + 'resemble-run/', httpOptions).pipe(
      tap(_ => console.log(`Run ResembleJS Test`)),
      catchError(this.handleError<any>('RunResembleJS'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return throwError(result as T);
    };
  }  
}
