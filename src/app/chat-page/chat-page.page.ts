import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {
  msgForm = new FormGroup({
    msgInput : new FormControl(''),
  });
  messages: any;
  msg: Array<any>=[];

  constructor(private router: Router, private menuCtrl: MenuController, private chatService: ChatService) { }

  ngOnInit() {
    this.msg=[];
    this.chatService.getData().subscribe((res) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      res.forEach((res) => {
        // console.log(res.message);
        this.msg.push(res.message);
      });
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
    console.log(date);
    this.chatService.setData(this.msgForm.get('msgInput').value, 21);
    this.msgForm.reset();
  }
}
