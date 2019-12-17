import { Injectable } from '@angular/core';
import { Teaching } from './teaching.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable, from, BehaviorSubject, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachingsService {
  private teachingsCollection: AngularFirestoreCollection<Teaching>;
  private teachings: Observable<Teaching[]>;
  constructor(public db: AngularFirestore, private database: AngularFireDatabase) {
    this.teachingsCollection = db.collection<Teaching>('preachings');
    this.teachings = this.teachingsCollection.valueChanges();
  }

  getTeachings(filter: BehaviorSubject<String>): Observable<any[]> {
    return filter.pipe(
      switchMap(text => {
        const newText = text.replace(/^\w/, c => c.toUpperCase());
        const endText = newText + '\uf8ff';
        let query;

        if (newText !== '') {
          query = this.db.collection('preachings', ref => ref.orderBy('title').startAt(newText).endAt(endText));
        } else {
          query = this.db.collection('preachings', ref => ref.orderBy('createdDate', 'desc'));
        }

        return query.snapshotChanges().pipe(
          debounceTime(200),
          distinctUntilChanged(),
          map((actions: any) => {
            return actions.map(value => {
              const id = value.payload.doc.id;
              const data = value.payload.doc.data();
              return { id, ...data };
            });
          })
        );
      })
    );
  }

  getTeaching(id) {
    if (id) {
      return this.teachingsCollection.doc<any>(id).valueChanges();
    } else {
      return of<Teaching>(this.getNewTeaching());
    }
  }

  getNewTeaching() {
    return {
      id: null,
      title: '',
      subtitle: '',
      banner: '',
      createdDate: new Date(),
      audio: {},
      video: {},
      read: {},
    };
  }

  create(teaching: Teaching) {
    delete teaching.id;
    const ref = this.teachingsCollection.add(teaching);
    return from(ref);
  }

  update(teaching: Teaching) {
    const { id } = teaching;
    const ref = this.teachingsCollection.doc(id).update(teaching);
    return from(ref);
  }

  delete(id) {
    const ref = this.teachingsCollection.doc(id).delete();
    return from(ref);
  }
}
