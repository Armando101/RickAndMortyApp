import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesService } from './services/episodes.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    EpisodesService
  ]
})
export class CoreModule { }
