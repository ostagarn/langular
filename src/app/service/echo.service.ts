import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Host} from "../model/host";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class EchoService {

  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) { }

  getHost(): Observable<Host> {
    let hostObservable = this.http.get<Host>(`${this.baseService.baseUrl}/echo`);
    return hostObservable;

  }
}
