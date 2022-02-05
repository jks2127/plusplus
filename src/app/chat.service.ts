import { Injectable, ViewChild } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { IonContent } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  @ViewChild('content') private content: IonContent;
  auth=getAuth();
  ref: any;
  constructor(private firestore: Firestore) {}
  getData() {
    this.ref = collection(this.firestore, 'Notes');
    return collectionData(this.ref);
  }
  setData(message: string, sender: number, date: any) {
    this.ref = collection(this.firestore, 'Notes');
    addDoc(this.ref, {message, sender, date}).then(() => {
    console.log('msg sent');
    this.content.scrollToBottom(1000).then(() => {console.log('scrolled to bottom');});
    });
  }
  clearChat() {
    this.ref = collection(this.firestore, 'Notes');
    console.log(doc(this.ref, 'Notes'));
    deleteDoc(this.ref).then(() => console.log('deleted documnet'));
  }
}
