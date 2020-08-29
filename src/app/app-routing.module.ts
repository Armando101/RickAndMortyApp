import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { EpisodeGuard } from 'src/app/core/guards/episode-guard.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'episodes', canActivate: [ EpisodeGuard ],
        loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
