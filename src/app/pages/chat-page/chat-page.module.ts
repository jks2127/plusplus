import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatPagePageRoutingModule } from './chat-page-routing.module';
import { ChatPagePage } from './chat-page.page';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPagePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ChatPagePage],
  providers: [DatePipe]
})
export class ChatPagePageModule {}
