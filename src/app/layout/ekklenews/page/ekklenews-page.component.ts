import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEk } from '@services/ekklenews/ekklenews.model';
import { Observable } from 'rxjs';
import { EkklenewsFacade } from '@store/ekklenews/ekklenews.facade';
import { MatDialog, MatDialogConfig } from '@angular/material';
// import { ConfirmComponent } from '@components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ekklenews-page',
  templateUrl: './ekklenews-page.component.html',
  styleUrls: ['./ekklenews-page.component.scss']
})
export class EkklenewsPageComponent implements OnInit {
  ekklenewId = null;
  ekklenew$: Observable<EventEk>;
  ekklenew: EventEk;
  fileExtension: string;
  ekklenewForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private ekklenewsFacade: EkklenewsFacade,
    private router: Router) {
      this.buildForm();
    }

  ngOnInit() {
    this.ekklenew$ = this.ekklenewsFacade.currentEkklenew$;
    this.fileExtension = '.png,.jpg';
    this.loadForm();
  }

  goBack() {
    this.router.navigate(['ekklenews']);
  }

  buildForm() {
    this.ekklenewForm = this.formBuilder.group({
      title: [null, Validators.compose([Validators.required])],
      subtitle: [null, Validators.compose([])],
      contact: [null, Validators.compose([])],
      eventDate: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.required])],
      link: [null, Validators.compose([Validators.required])]
    });
  }

  setFilePath($event) {
    console.log($event);
    this.ekklenew.banner = $event;
  }

  loadForm() {
    this.ekklenew$.subscribe(response => {
        let eventDate;
        const { title, subtitle, description, type } = response;
        const contact = response.contact || '';
        const link = response.link || '';
        if (response.eventDate) {
          if (response.eventDate.seconds) {
            eventDate = new Date(response.eventDate.seconds * 1000);
          } else {
            eventDate = response.eventDate;
          }
        } else {
          eventDate = '';
        }
        this.ekklenew = response;

        this.ekklenewForm.setValue({
          title,
          subtitle,
          eventDate,
          description,
          type,
          contact,
          link
        });
    });
  }

  save(form: FormGroup) {
    if (form.valid) {
      const { value } = form;
      const requestModel = this.buildRequestModel(value);

      if (requestModel.id) {
        this.openModal({
          type: 'update',
          title: 'Ekklenews',
          content: 'Deseas actualizar este Ekklenews?'
        }, requestModel);
      } else {
        this.ekklenewsFacade.addEkklenew(requestModel);
      }
    }
  }

  executeUpdate(data) {
    this.ekklenewsFacade.updateEkklenew(data);
  }

  executeDelete(data) {
    console.log(data);
  }

  buildRequestModel(model) {
    const { title, subtitle, description, type, eventDate } = model;
    const { id, banner } = this.ekklenew;

    if (type === 'video') {
      const { link } = model;
      return {
        id,
        banner,
        title,
        subtitle,
        description,
        type,
        eventDate,
        link
      };
    } else {
      const { contact, content } = model;
      return {
        id,
        banner,
        title,
        subtitle,
        description,
        type,
        eventDate,
        content,
        contact
      };
    }
  }

  openModal(options, model) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = options;

    // const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     if (options.type === 'update') {
    //       this.executeUpdate(model);
    //     }

    //     if (options.type === 'delete') {
    //       this.executeDelete(model);
    //     }
    //   }
    // });
  }
}
