import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RprtsHomeComponent } from './rprts-home/rprts-home.component';
import { Tstrep01Component } from './tstrep01/tstrep01.component';

const routes: Routes = [
  {
    path: '',
    component: RprtsHomeComponent,
    children: [{ path: 'tst1', component: Tstrep01Component }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
