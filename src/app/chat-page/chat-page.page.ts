import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, MenuController } from '@ionic/angular';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {
  @ViewChild('content') private content: IonContent;
  msgForm = new FormGroup({
    msgInput : new FormControl(''),
  });
  messages: any;
  msg: Array<any>=[];

  constructor(private router: Router, private menuCtrl: MenuController, private chatService: ChatService,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.msg=[];
    this.chatService.getData().subscribe((res) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      res.forEach((res) => {
        // console.log(res.message);
        this.msg.push(res.message);
      });
      this.content.scrollToBottom(1000).then(() => {console.log('scrolled to bottom');});
    });
  }
  goToChatPage() {
    this.router.navigate(['/chat-page']);
  }
  logOut() {
    this.menuCtrl.enable(false);
    this.chatService.clearChat();
    this.router.navigate(['/']);
  }
  onSend() {
    const date = new Date();
    const dateTransformed = this.datepipe.transform(date, 'yyyy-MM-dd');
    console.log(dateTransformed);
    this.chatService.setData(this.msgForm.get('msgInput').value, 21, dateTransformed);
    this.msgForm.reset();
    // this.content.scrollToBottom(100);
    this.content.scrollToBottom(1000).then(() => {console.log('scrolled to bottom');});

  }
}
