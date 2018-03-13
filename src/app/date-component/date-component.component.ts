import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./date-component.component.css']
})
export class DateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     setTimeout(() => {
      const $ = window["$"];
      $('#datetimepicker').datepicker({});
     }, 10);
  }
  gotoBackPage(){
    window.history.back();
  }
}
