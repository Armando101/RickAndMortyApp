import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
