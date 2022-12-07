import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-animation',
  templateUrl: './arrow-animation.component.html',
  styleUrls: ['./arrow-animation.component.scss']
})
export class ArrowAnimationComponent {

  constructor(public scroller: ViewportScroller) { }
}
