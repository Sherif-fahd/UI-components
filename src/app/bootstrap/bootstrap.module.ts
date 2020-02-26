import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [CardComponent, CarouselComponent, CollapseComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class BootstrapModule { }
