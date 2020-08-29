import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EpisodesService } from 'src/app/core/services/episodes.service';
import { Episode } from 'src/app/core/models/episode.model';
import { Character } from 'src/app/core/models/character.model';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public titleHeader = 'Rick and Morty Episodes';
  public data: Episode[] | Character[];
  public isEpisode: boolean;
  public numberPage: number;

  constructor(
    private episodesService: EpisodesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params.id;
      id ? this.getCharacter(id) : this.getEpisodes(Number(params.number));
    });
  }

  getCharacter(id: number): void {
    this.episodesService.getEpisode(id).subscribe((response: Character[]) => {
      this.titleHeader = `Characters in episode number: ${id}`;
      this.isEpisode = false;
      this.data = response;
    });
  }

  getEpisodes(numberPage: number): void {
    // tslint:disable-next-line: no-unused-expression
    numberPage < 1 && (this.router.navigateByUrl('/episodes/page/1'));
    this.episodesService.getEpisodes(numberPage)
          .subscribe(
            (response: Episode[]) => this.data = response,
            error => this.router.navigateByUrl('/episodes/page/3')
          );
    this.isEpisode = true;
    this.numberPage = numberPage;
  }
}
