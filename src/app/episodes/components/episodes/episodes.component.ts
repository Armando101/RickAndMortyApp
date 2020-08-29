import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  public isEpisode: boolean;

  constructor(
    private episodesService: EpisodesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params.id;
      if ( id ) {
        this.episodesService.getEpisode(id).subscribe((response: Character[]) => {
          console.log(response);
          this.titleHeader = `Characters in episode number: ${id}`;
          this.isEpisode = false;
          this.data = response;
        });
      } else {
        this.episodesService.getEpisodes(params.number)
          .subscribe(
            (response: Episode[]) => this.data = response,
            error => this.router.navigateByUrl('/episodes/page/1')
          );
        this.isEpisode = true;
      }
    });
  }
}
