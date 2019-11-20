import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss']
})
export class SideProjectsComponent implements OnInit {

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
  }

}
