import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EkklenewsService } from '@services/ekklenews/ekklenews.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { EkklenewsFacade } from '@store/ekklenews/ekklenews.facade';
import { EventEk } from '@services/ekklenews/ekklenews.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ekklenews-list',
  templateUrl: './ekklenews-list.component.html',
  styleUrls: ['./ekklenews-list.component.scss']
})
export class EkklenewsListComponent implements OnInit {
  isSearching: boolean;
  ekklenews$: Observable<EventEk[]>;
  ekklenews: any[];
  searchValue: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(
    private router: Router,
    private ekklenewsFacade: EkklenewsFacade) {
    this.ekklenews$ = ekklenewsFacade.ekklenews$;
  }

  ngOnInit() {
    this.isSearching = true;
    this.search('');
  }

  add() {
    this.router.navigate(['ekklenews/nuevo']);
  }

  edit(item) {
    this.router.navigate(['ekklenews', item.id]);
  }

  search(value) {
    console.log(value);
    this.ekklenewsFacade.loadEkklenews(value);
  }
}
