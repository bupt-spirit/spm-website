import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NoticeService } from '../../../_services';
import { NoticeMessage } from '../../../_models';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {

  @Output()
  added = new EventEmitter<NoticeMessage>();

  addNoticeForm: FormGroup;
  errorResponse: HttpErrorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private noticeService: NoticeService,
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.addNoticeForm.controls;
  }

  ngOnInit() {
    this.addNoticeForm = this.formBuilder.group({
      title: ['', Validators.required],
      detail: ['', Validators.required],
    });
  }

  onSubmit() {
    this.noticeService.createNotice({
      title: this.form.title.value,
      detail: this.form.detail.value,
    }).subscribe(
      (noticeMessage: NoticeMessage) => {
        this.added.emit(noticeMessage);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
  }

}
