import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any = [
    {
      name: 'JavaScript / TypeScript',
      img: 'javascript-typescript'
    },
    {
      name: 'Angular',
      img: 'angular'
    },{
      name: 'HTML',
      img: 'html'
    },
    {
      name: 'CSS / SCSS',
      img: 'css-scss'
    },
    {
      name: 'Git',
      img: 'git'
    },
    {
      name: 'Rest-API',
      img: 'rest-api'
    },{
      name: 'SCRUM',
      img: 'scrum'
    },
    {
      name: 'Firebase (Database)',
      img: 'firebase'
    }
  ];
}
