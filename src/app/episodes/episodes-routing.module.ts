import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './components/episodes/episodes.component';

const routes: Routes = [
    {
        path: '',
        component: EpisodesComponent,
        redirectTo: 'page/1',
        pathMatch: 'full'
    },
    {
        path: 'page/:number',
        component: EpisodesComponent
    },
    {
        path: ':id',
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
