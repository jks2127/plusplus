import { Injectable, ViewChild } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, Timestamp} from '@firebase/firestore';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  @ViewChild('content') private content: IonContent;
  auth=getAuth();
  ref: any;
  constructor(private firestore: Firestore) {}
  getData(): Observable<message[]>{
    this.ref = collection(this.firestore, 'Notes');
    return collectionData(this.ref, {idField: "mId"});
  }
  setData(message: string, sender: number, date: any) {
    this.ref = collection(this.firestore, 'Notes');
    addDoc(this.ref, {message, sender, date}).then(() => {
    console.log('msg sent');
    this.content.scrollToBottom(1000);
    }).catch((err: any)=>{});
  }
  clearChat() {
    this.ref = collection(this.firestore, 'Notes');
    console.log(doc(this.ref, 'Notes'));
    deleteDoc(this.ref).then(() => console.log('deleted documnet'));
  }
}
export interface message {
  message: any;
  mId:string,
  msg: string,
  from: string,
  to: string,
  creationTime: Timestamp,
}