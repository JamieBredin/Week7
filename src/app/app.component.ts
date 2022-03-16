import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';
import { IOMDBResponse } from './omdbresponse';
//import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){
  }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log('Director name:' +this.movieData.Director);
      },
      error => this.errorMessage = <any>error
      );
      return false;
      
    
  }
}


