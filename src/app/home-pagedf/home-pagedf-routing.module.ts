import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagedfPage } from './home-pagedf.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagedfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagedfPageRoutingModule {}
