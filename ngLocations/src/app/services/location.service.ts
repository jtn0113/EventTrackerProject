
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
          () => new Error('LocationService.index(): error retrieving todo list: ' + err)
        );
      })
    );
  }
}


//TODO: show, create, update, destroy
