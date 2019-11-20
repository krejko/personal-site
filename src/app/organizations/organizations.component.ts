import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  showAll = false;
  displayLimit = 8

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
  }

}
