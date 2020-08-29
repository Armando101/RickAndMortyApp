import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episode } from 'src/app/core/models/episode.model';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: Episode & Character;
  @Input() isEpisode: boolean;

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    !this.data.image && (this.data.image = environment.imgDefaul);
  }

}
