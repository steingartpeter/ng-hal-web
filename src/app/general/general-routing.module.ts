import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GnrlHomeComponent } from './gnrl-home/gnrl-home.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {
    path: '',
    component: GnrlHomeComponent,
  },
  {
    path: '01-01',
    component: NewsFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
