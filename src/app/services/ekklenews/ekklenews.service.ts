import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { EventEk } from './ekklenews.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EkklenewsService {
  private eventsCollection: AngularFirestoreCollection<EventEk>;
  private events: Observable<EventEk[]>;

  constructor(public db: AngularFirestore, private database: AngularFireDatabase) {
    this.eventsCollection = db.collection<EventEk>('events2');
    this.events = this.eventsCollection.valueChanges();
  }

  getEkklenews(): Observable<any[]> {
    return this.db.collection('events', ref => ref.orderBy('eventDate', 'desc'))
    .snapshotChanges()
    .pipe(
      map((actions: any) => {
        return actions.map(value => {
          const id = value.payload.doc.id;
          const data = value.payload.doc.data();
          return { id, ...data };
        });
      })
    );
  }

  getEkklenew(id) {
    return this.eventsCollection.doc<EventEk>(id).valueChanges();
  }

  update(event: EventEk) {
    const { id } = event;
    const ref = this.eventsCollection.doc(id).update(event);
    return from(ref);
  }

  create(event: EventEk) {
    delete event.id;
     const ref = this.eventsCollection.add(event);
     return from(ref);
  }

  delete(id) {
    const ref = this.eventsCollection.doc(id).delete();
    return from(ref);
  }
}
