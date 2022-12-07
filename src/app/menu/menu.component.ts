import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuOpen: boolean = false;

  constructor(public scroller: ViewportScroller,
    private router: Router) { }

  openMenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }

  closeMenu(id?: any) {
    this.menuOpen = false;
    this.router.navigate(['/']);
    setTimeout(() => {
      this.scroller.scrollToAnchor(id);
    }, 10);
  }
}
