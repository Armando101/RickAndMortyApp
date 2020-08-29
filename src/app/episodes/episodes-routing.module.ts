import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeGuard } from 'src/app/core/guards/episode-guard.guard';

const routes: Routes = [
    {
        path: '', canActivate: [ EpisodeGuard ],
        component: EpisodesComponent
    },
    {
        path: ':id', canActivate: [ EpisodeGuard ],
        component: EpisodesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class EpisodesRoutingModule {}
