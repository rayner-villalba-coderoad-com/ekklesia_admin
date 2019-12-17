import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ParagraphComponent,
    multi: true
  }]
})
export class ParagraphComponent implements OnInit, ControlValueAccessor {
  @Input() paragraphs;
  private onChange: (value) => void;
  @Output() wroteValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    if (!this.paragraphs) {
      this.paragraphs = [];
      this.insertParagraph();
    }
  }

  addParagraph($event) {
    $event.preventDefault();
    this.insertParagraph();
  }

  insertParagraph() {
    const paragraph = {
      title: '',
      subtitle: '',
      content: ''
    };

    this.paragraphs = [...this.paragraphs, paragraph];
  }

  removeParagraph($event, index) {
    $event.preventDefault();
    this.paragraphs = this.paragraphs.filter((value, i) => index !== i);
    this.onChange(this.paragraphs);
  }

  writeParagraph(fieldName, index, value) {
    this.paragraphs[index][fieldName] = value;
    this.onChange(this.paragraphs);
  }


  writeValue (values) {
    if (values) {
      this.paragraphs = values;
    }
  }

  registerOnChange (onChange: (value) => void) {
    this.onChange = onChange;
  }

  registerOnTouched () { }

  setDisabledState (isDisabled: boolean) { }
}
