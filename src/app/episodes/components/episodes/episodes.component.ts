import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EpisodesService } from 'src/app/core/services/episodes.service';
import { Episode } from 'src/app/core/models/episode.model';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public titleHeader = 'Rick and Morty Episodes';
  public data: Episode[] | Character[];

  constructor(
    private episodesService: EpisodesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
      if ( id ) {
        this.episodesService.getEpisode(id).subscribe((response: Character[]) => {
          console.log(response);
          // this.data = response;
        });
      }
    });

    this.episodesService.getEpisodes().subscribe((response: Episode[]) => this.data = response);
  }

}
