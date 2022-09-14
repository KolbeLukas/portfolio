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

  showProjects(x: string) {
    this.all = false;
    this.angular = false;
    this.javascript = false;

    if (x == 'all') {
      this.all = true;
    }
    if (x == 'angular') {
      this.angular = true;
    }
    if (x == 'javascript') {
      this.javascript = true;
    }
  }
}