import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  auth=getAuth();
  ref: any;

  constructor(private firestore: Firestore) {}
  getData() {
    this.ref = collection(this.firestore, 'Notes');
    return collectionData(this.ref);
  }
  setData(message: string, sender: number) {
    this.ref = collection(this.firestore, 'Notes');
    addDoc(this.ref, {message, sender}).then(() => console.log('msg sent'));
  }
  clearChat() {
    this.ref = collection(this.firestore, 'Notes');
    console.log(doc(this.ref, 'Notes'));;
    // deleteDoc(this.ref).then(() => console.log('deleted documnet'));
  }
}
