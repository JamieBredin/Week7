import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable} from 'rxjs';
import{catchError, tap} from 'rxjs/operators';
import {IOMDBResponse} from '../omdbresponse';


@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL="https://www.omdbapi.com/";
  private _key='?apikey=d861dbc8&t='
  constructor(private _http:HttpClient) { }

  getMovieData(movieName : string): Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL + this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      //catchError(this.handleError)
    
    );

    
  }
    // private handleError(err:HttpErrorResponse)
    // {
    //   console.log('OmdbApiService: ' + err.message);
    //  return Observable.throw(err.message);
    // }
    
}


