import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPagePage } from './chat-page.page';
import { PreChatPageComponent } from ".//pre-chat-page/pre-chat-page.component";

const routes: Routes = [
  {
    path: '',
    component: PreChatPageComponent
  },
  {
    path: 'chat',
    component: ChatPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPagePageRoutingModule {}
