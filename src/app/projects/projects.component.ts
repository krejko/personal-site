import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  showAll = false;
  displayLimit = 6

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
  }

}
