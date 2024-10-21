import { Citieslist } from "../../types/cities-list";
import { IBaseCountriesRespose } from "../base-countries-response.interface";


export interface ICitiesResponse extends IBaseCountriesRespose{
    data: Citieslist;
}