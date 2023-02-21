import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RprtsHomeComponent } from './rprts-home/rprts-home.component';

const routes: Routes = [{ path: '', component: RprtsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
