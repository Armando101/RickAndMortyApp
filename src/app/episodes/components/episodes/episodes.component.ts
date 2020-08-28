import { Component, OnInit } from '@angular/core';

import { EpisodesService } from 'src/app/core/services/episodes.service';
import { Episode } from 'src/app/core/models/episode.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public titleHeader = 'Rick and Morty Episodes';
  public episodes: Episode[];

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((response: Episode[]) => this.episodes = response);
    console.log(this.episodes);
  }

}
