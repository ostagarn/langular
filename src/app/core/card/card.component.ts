import { Component, OnInit, Input } from '@angular/core';
import { Lang } from 'src/app/model/lang';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() lang: Lang;

  constructor() { }

  ngOnInit() {
  }

}
