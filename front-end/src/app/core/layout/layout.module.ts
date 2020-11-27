import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, TopBarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
