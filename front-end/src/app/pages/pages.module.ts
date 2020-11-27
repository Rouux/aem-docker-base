import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../core/layout/layout.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
  exports: [PagesComponent],
})
export class PagesModule {}
