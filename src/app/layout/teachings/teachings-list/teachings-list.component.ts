import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachingsService } from '@services/teachings/teachings.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teaching } from '@services/teachings/teaching.model';

@Component({
  selector: 'app-teachings-list',
  templateUrl: './teachings-list.component.html',
  styleUrls: ['./teachings-list.component.scss']
})
export class TeachingsListComponent implements OnInit {
  preachings$: Observable<Teaching[]>;
  startAt: BehaviorSubject<any | null>;

  constructor(private router: Router, private teachingsService: TeachingsService) {
    this.startAt = new BehaviorSubject('');
  }

  ngOnInit() {
    this.preachings$ = this.teachingsService.getTeachings(this.startAt);
    this.search('');
  }

  add() {
    this.router.navigate(['teachings/nuevo']);
  }

  goTeachingDetail(teaching) {
    const {id} = teaching;
    this.router.navigate(['teachings', id]);
  }

  search(value) {
    this.startAt.next(value);
  }
}
