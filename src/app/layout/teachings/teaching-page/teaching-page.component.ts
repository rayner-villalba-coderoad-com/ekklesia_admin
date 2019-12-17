import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Teaching } from '@services/teachings/teaching.model';
import { ActivatedRoute } from '@angular/router';
import { TeachingsService } from '@services/teachings/teachings.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-teaching-page',
  templateUrl: './teaching-page.component.html',
  styleUrls: ['./teaching-page.component.scss']
})
export class TeachingPageComponent implements OnInit {
  fileExtension: string;
  fileAudioExtension: string;
  teaching$: Observable<Teaching>;
  teaching: Teaching;
  teachingFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private teachingsService: TeachingsService) {
    // this.teaching.banner = '';
   }

  get formArray(): AbstractControl | null { return this.teachingFormGroup.get('formArray'); }
  ngOnInit() {
    const id = this.route.snapshot.params['teachingId'];
    this.fileExtension = '.png,.jpg';
    this.fileAudioExtension = '.mp3,.wav';
    this.teachingFormGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          banner: ['', Validators.required],
          title: ['', Validators.required],
          subtitle: ['', Validators.required]
        }),
        this._formBuilder.group({
          link: ['']
        }),
        this._formBuilder.group({}),
        this._formBuilder.group({
          contents: [''],
          passage: [''],
          verse: [''],
          praying: ['']
        }),
        this._formBuilder.group({
          createdDate: ['']
        }),

      ])
    });

    this.teaching$ = this.teachingsService.getTeaching(id).pipe(
      tap(teaching => {
        this.teaching = teaching;
        this.formArray.get([0]).patchValue(teaching);
        this.formArray.get([1]).patchValue(teaching);
        this.formArray.get([2]).patchValue(teaching);
        this.formArray.get([3]).patchValue(teaching);
        this.formArray.get([4]).patchValue(teaching);
      })
    );
  }

  setFilePath($event) {
    console.log($event);
    this.teaching.banner = $event;
    const form = this.formArray.get([0]);
    form.patchValue({banner: $event});
  }

  setFileAudioPath($event) {
    this.teaching.audio.ecastLink = $event;
    const audioForm = this.formArray.get([2]);
    audioForm.patchValue({audio: $event});
  }

  save(form: FormGroup) {
    console.log(form);
  }
}
