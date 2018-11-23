import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe((data) =>  console.log("items",data));
  }
  send(item: any) {
    this.itemsCollection.add({'item':item});
  }
}
