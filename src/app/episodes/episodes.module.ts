import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { EpisodesComponent } from './components/episodes/episodes.component';

import { EpisodesRoutingModule } from './episodes-routing.module';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    SharedModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
