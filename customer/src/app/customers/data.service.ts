import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    private url = "../../assets/data.json";

    constructor(private http: Http){}

    getJsonItems(){
        return this.http.get(this.url);
    }
}