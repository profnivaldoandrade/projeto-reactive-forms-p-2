import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICountriesRespose } from "../interfaces/countries-response/countries-response.interface";
import { CountriesList } from "../types/countries-list";

@Injectable({
    providedIn: 'root',

})
export class CountriesService{
    constructor(
        private readonly _HttpClient: HttpClient 
    ){}
    getCoutries(): Observable<CountriesList> {
        return this._HttpClient.get<ICountriesRespose>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((countriesService)=>{
                return countriesService.data;
            })
        );
    }
}