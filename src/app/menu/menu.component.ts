import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

import { ROUND_ANTICLOCK_ANIMATION }   from '../animations/round-anticlock.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  //styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [ 
    ROUND_ANTICLOCK_ANIMATION
 ]

})
export class MenuComponent implements OnInit {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  constructor() { }

  ngOnInit() {
  }

}
