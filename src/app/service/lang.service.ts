import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lang } from '../model/lang';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  langs: Lang[];
  constructor() {
    this.langs = [
      {name: 'Java', description: 'Störst'},
      {name: 'Javascript', description: 'Kung'},
      {name: 'Kotlin', description: 'New kid on the block'},
      {name: 'Groovy', description: 'Hipster'},
      {name: 'Scala', description: 'Stylish'},
      {name: 'Pascal', description: 'Sience'},
      {name: 'Python', description: 'Funny ?'},
      {name: 'Basic', description: 'basic'},
      {name: 'PHP', description: 'but why ?'},
      {name: 'Ruby', description: 'not so much'}
    ];
   }

  getLangs(): Observable<Lang[]> {
      return of(this.langs);
  }
}
