import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GnrlHomeComponent } from './gnrl-home/gnrl-home.component';
import { MaterialImporterModule } from '../material-importer.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';

@NgModule({
  declarations: [GnrlHomeComponent, NewsFeedComponent],
  imports: [CommonModule, GeneralRoutingModule, MaterialImporterModule],
})
export class GeneralModule {}
