import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public titleHeader = 'Rick and Morty Episodes'
  constructor() { }

  ngOnInit(): void {
  }

}
