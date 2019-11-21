import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  isVisible = false;
  project = undefined

  constructor(
  ) { }

  ngOnInit() {
  }

  open(project) {
    this.project = project
    console.log("Got Proj", project)
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
