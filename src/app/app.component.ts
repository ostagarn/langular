import { Component, OnInit } from '@angular/core';
import { Lang } from './model/lang';
import { LangService } from './service/lang.service';
import { EchoService } from "./service/echo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'langular';
  langs: Lang[];
  hostname: string;

  constructor(
    private langService: LangService,
    private echoService: EchoService) {
   }

   ngOnInit() {
     this.getLangs();
     this.getHost();
   }

  getLangs() {
    this.langService.getLangs()
    .subscribe(langs => {
      this.langs = langs;
    });
  }

  getHost() {
    this.echoService.getHost()
      .subscribe(host => {
        this.hostname = host.hostname;
      });
  }
}
