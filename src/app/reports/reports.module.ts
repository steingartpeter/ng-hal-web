import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImporterModule } from '../material-importer.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { RprtsHomeComponent } from './rprts-home/rprts-home.component';
import { Tstrep01Component } from './tstrep01/tstrep01.component';

@NgModule({
  declarations: [RprtsHomeComponent, Tstrep01Component],
  imports: [CommonModule, ReportsRoutingModule, MaterialImporterModule],
})
export class ReportsModule {}
