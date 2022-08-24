import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  openMenu() {
    let menu = document.getElementById('res-menu');

    if (menu?.className === "nav") {
      menu.className += " responsive";
    } else {
      if (menu) {
        menu.className = "nav";
      }
    }
  }

  closeMenu() {
    let menu = document.getElementById('res-menu');

    if (menu) {
      menu.className = "nav";
    }
  }
}
