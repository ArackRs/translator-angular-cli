import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

export class BaseService<T> {
  basePath: string = 'http://localhost:3000/api/v1';
  resourceEndpoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content.Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    //Default error handling
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      //The backend returned an unsuccessful response code
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    //Return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  private resourceParh(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }
  //Create Resource
  create(item: any) {
    return this.http.post<T>(this.resourceParh(), JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }
  //Delete Resource
  delete(id: any) {
    return this.http.delete(`${this.resourceParh()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //Update Resource
  update(id: any, item: any) {
    return this.http.put(`${this.resourceParh()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //Get All Resources
  getAll(): Observable<T> {
    return this.http.get<T>(this.resourceParh(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
