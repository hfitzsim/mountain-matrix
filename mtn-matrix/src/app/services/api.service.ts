import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSnowReport(){
    return this.http.get('http://feeds.snocountry.net/getSnowReport.php?apiKey=SnoCountry.example&states=vt')
    .subscribe((response) => {
      console.log(JSON.stringify(response));
    }); 
    }

  getResortList() {
    return this.http.get('JSON Sample: http://feeds.snocountry.net/getResortList.php?apiKey=SnoCountry.example&states=vt&output=json')
    .subscribe((response) => {
      console.log(JSON.stringify(response));
    });
  }
}
