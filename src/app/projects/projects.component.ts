import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filter = document.getElementsByClassName('filter');
  all = true;
  javascript = false;
  angular = false;

  setFilter(x: number) {
    for (let i = 0; i < this.filter.length; i++) {
      const element = this.filter[i];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    }
    this.filter[x].classList.add('active');
    this.showProjects(x);
  }

  showProjects(x: number) {
    this.all = false;
    this.angular = false;
    this.javascript = false;
    if (x == 0) {
      this.all = true;
    }
    if (x == 1) {
      this.angular = true;
    }
    if (x == 2) {
      this.javascript = true;
    }
  }
}