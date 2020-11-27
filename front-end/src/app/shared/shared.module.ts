import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ComponentsModule],
  exports: [MaterialModule, ComponentsModule],
})
export class SharedModule {}
