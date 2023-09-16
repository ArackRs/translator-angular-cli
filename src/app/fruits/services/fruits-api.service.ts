import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitsApiService {
  baseUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?f=1";
  constructor(private http: HttpClient) { }

  getCocktails(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
