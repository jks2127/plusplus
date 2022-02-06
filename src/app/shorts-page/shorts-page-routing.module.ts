import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortsPagedfPage } from './shorts-pagedf.page';

const routes: Routes = [
  {
    path: '',
    component: ShortsPagedfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortsPagedfPageRoutingModule {}
