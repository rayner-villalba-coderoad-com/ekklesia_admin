import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { finalize, switchMap } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmComponent } from './../modals/confirm/confirm.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() link: string;
  @Input() fileType: string;
  @Input() folder: string;
  @Input() extension: string;
  @Output() setFilePath = new EventEmitter();

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.extension);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    // if (file.type.split('/')[0] !== 'image') {
    //   console.error('unsupported file type :( ');
    //   return;
    // }
    const { name } = file;
    const fileName = name.replace(/\s+/g, '_');

    // The storage path
    const path = `${this.folder}/${fileName}`;
    const ref = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
    this.snapshot
      .pipe(
        finalize(() => {
          this.downloadURL = this.storage.ref(path).getDownloadURL();
          this.downloadURL.subscribe(res => {
            const path = res;
            this.setFilePath.emit(path);
          });
        })
      ).subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  delete() {
    this.storage.storage.refFromURL(this.link).delete();
    this.link = null;
  }

  confirmDelete($event, type) {
    $event.preventDefault();
    const messages = {
      image: {
        title: 'Eliminar Imagen',
        content: 'Deseas Eliminar esta imagen?'
      },
      audio: {
        title: 'Eliminar Audio',
        content: 'Deseas Eliminar este Audio?'
      }
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = messages[type];

    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
    });
  }
}
