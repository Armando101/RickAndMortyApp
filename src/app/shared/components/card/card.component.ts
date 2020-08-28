import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public data = {
    img: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rick-morty-pelicula.jpg?itok=thJFYqHN',
    name: 'Pilot',
    airDate: 'Today',
    episode: 'S0E1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
