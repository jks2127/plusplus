import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, MenuController } from '@ionic/angular';
import { ChatService } from '../../services/chat/chat.service';
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
  msg: Array<any>=[];

  constructor(private router: Router, private menuCtrl: MenuController, private chatService: ChatService,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.msg=[];
    this.chatService.getData().subscribe((res) => {
      console.log(res);
      
      res.forEach((item) => {
        let exists = this.msg.find((element)=> element.mId === item.mId)
        if(!exists){
          this.msg.push(item);
        }
      });
      this.content.scrollToBottom(1000).then(() => {console.log('scrolled to bottom');}).catch((err: any)=>{});
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
    this.chatService.setData(this.msgForm.get('msgInput').value, localStorage.getItem("userId"), date);
    this.msgForm.reset();
    // this.content.scrollToBottom(100);
    // this.content.scrollToBottom(1000).then(() => {console.log('scrolled to bottom');});

  }
  whoseMessage(sender: string) {
    return sender === localStorage.getItem("userId");
  }
}
