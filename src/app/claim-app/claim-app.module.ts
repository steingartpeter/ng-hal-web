import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImporterModule } from '../material-importer.module';

import { ClaimAppRoutingModule } from './claim-app-routing.module';
import { ClmHomeComponent } from './clm-home/clm-home.component';

@NgModule({
  declarations: [ClmHomeComponent],
  imports: [CommonModule, ClaimAppRoutingModule, MaterialImporterModule],
})
export class ClaimAppModule {}
