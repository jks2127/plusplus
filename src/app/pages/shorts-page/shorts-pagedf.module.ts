import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortsPagedfPageRoutingModule } from './shorts-page-routing.module';

import { ShortsPagedfPage } from './shorts-pagedf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortsPagedfPageRoutingModule
  ],
  declarations: [ShortsPagedfPage]
})
export class ShortsPagedfPageModule {}
