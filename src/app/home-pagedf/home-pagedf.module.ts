import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagedfPageRoutingModule } from './home-pagedf-routing.module';

import { HomePagedfPage } from './home-pagedf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagedfPageRoutingModule
  ],
  declarations: [HomePagedfPage]
})
export class HomePagedfPageModule {}
