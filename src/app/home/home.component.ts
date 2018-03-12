import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageType: string;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.pageType = '';
    this.subscription = this.route.params.subscribe((params) => {
      setTimeout(() => {
        this.pageType = params['id'] || '';
    }, 0);
});
  }

}
