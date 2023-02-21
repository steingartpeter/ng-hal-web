import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClmHomeComponent } from './clm-home/clm-home.component';

const routes: Routes = [{ path: '', component: ClmHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimAppRoutingModule {}
