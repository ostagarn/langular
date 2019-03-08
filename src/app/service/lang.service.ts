import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lang } from '../model/lang';
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  langs: Lang[];
  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) {}

  getLangs(): Observable<Lang[]> {
    let langObservable = this.http.get<Lang[]>(`${this.baseService.baseUrl}/langs`);
    return langObservable;
  }
}
