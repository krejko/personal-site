import { Component, OnInit, ViewChild } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  showAll = false;
  @ViewChild('modal', { static: false }) modal: ProjectModalComponent
  displayLimit = 6

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
  }

}
