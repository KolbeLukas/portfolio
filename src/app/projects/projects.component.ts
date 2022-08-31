import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  all: boolean = true;
  javascript: boolean = false;
  angular: boolean = false;

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