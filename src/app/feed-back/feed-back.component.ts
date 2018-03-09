import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  gvcMetricsFeedBacForm: FormGroup;
  helpOptions: any[];
  helpOption: string;
  comment: string;
  placeHolderTxt: string;
  success: boolean;
  error: boolean;
  constructor(
  ) {
    this.helpOptions = [
      { name: 'Report a bug', key: '0', checked: false },
      { name: 'Finding this app helpful?', key: '1', checked: false },
      { name: 'Request a new Feature', key: '2', checked: false },
      { name: 'Request a new Report', key: '3', checked: false },
      { name: 'UI / UX imporvements', key: '4', checked: false }
    ];
    this.success = false;
    this.error = false;
  }

  ngOnInit() {
  }

  setHelpOption(helpOpt) {
    this.helpOption = helpOpt.key;
    this.placeHolderTxt = this.getCommentPlaceholder();
  }

  getCommentPlaceholder() {
    let plactxt = '';
    switch (this.helpOption) {
      case '0':
        plactxt = 'We are really sorry, tell us what went wrong?';
        break;
      case '1':
        plactxt = ':) Thats great! Let us know more...';
        break;
      case '2':
        plactxt = 'Sure, What new report would you like to have?';
        break;
      case '3':
        plactxt = 'Sure, What new report would you like to have?';
        break;
      case '4':
        plactxt = 'How can we do better to improve the usability?';
        break;
    }
    return plactxt;
  }

  onSubmitFeedbackForm(){
    this.success = true;
  }

  gotoBackPage(){
    window.history.back();
  }

}
