import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  openMenu() {
    let menu = document.getElementById('menu');

    if (menu?.className === "menu") {
      menu.className += " responsive";
    } else {
      if (menu) {
        menu.className = "menu";
      }
    }
  }

  closeMenu() {
    let menu = document.getElementById('menu');
    let nav = document.getElementById('checkbox') as HTMLInputElement | null;

    if (menu && nav) {
      menu.className = "menu";
      nav.checked = false;
    }
  }
}
