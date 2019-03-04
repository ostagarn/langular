import { Component } from '@angular/core';
import { Lang } from './model/lang';
import { LangService } from './service/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'langular';
  langs: Lang[];

  constructor(private langService: LangService) {
    this.getLangs();
   }

  getLangs() {
    this.langService.getLangs()
    .subscribe(langs => {
      this.langs = langs;
    });
  }
}
