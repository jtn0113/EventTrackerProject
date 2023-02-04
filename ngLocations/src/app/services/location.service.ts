
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment.development';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = environment.baseUrl + 'api/locations';

  constructor(private http: HttpClient) { }

  index(): Observable<Location[]>{
    return this.http.get<Location[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('LocationService.index(): error retrieving location list: ' + err)
        );
      })
    );
  }

  destroy(id: number):Observable<void>  {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('LocationService.delete(): error deleting location: ' + err)
        );
      })
    );
  }

  create(location: Location):Observable<Location> {
    location.comments = '';
    return this.http.post<Location>(this.url, location).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('LocationService.create(): error creating location: ' + err)
        );
      })
    );
  }

  update(location: Location):Observable<Location> {
    return this.http.put<Location>(`${this.url}/${location.id}`, location).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('LocationService.update(): error updating location: ' + err)
        );
      })
    );
  }
}


//TODO: show, create, update, destroy
