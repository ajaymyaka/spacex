import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  public get(){
    return this.httpClient.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }
}