import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Host} from "../model/host";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EchoService {

  baseUrl: string = 'http://localhost:8080';
  constructor(
    private http: HttpClient
  ) { }

  getHost(): Observable<Host> {
    let hostObservable = this.http.get<Host>(`${this.baseUrl}/echo`);
    return hostObservable;

  }
}
