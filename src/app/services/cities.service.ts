import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICitiesResponse } from "../interfaces/cities-respose/cities-response.interface";
import { Citieslist } from "../types/cities-list";

@Injectable({
    providedIn: 'root',
})
export class CitiesService{
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    getCities(countryName: string, stateName: string): Observable<Citieslist>{
        return this._httpClient.post<ICitiesResponse>(
            'https://countriesnow.space/api/v0.1/countries/state/cities',
            {
                country: countryName,
                state: stateName
            }
        ).pipe(
            map((citiesResponse)=>{
                return citiesResponse.data;
            })
        );
    }
}