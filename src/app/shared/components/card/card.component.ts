import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episode } from 'src/app/core/models/episode.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: Episode;

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    !this.data.img && (this.data.img = environment.imgDefaul);
  }

}
