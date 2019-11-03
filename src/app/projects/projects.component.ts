import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: "NFS MAPS",
      dates: "",
      logo: "./assets/images/projects/nfsmaps.png",
      style: { "background-color": "rgba(34, 51, 65, 1)" },
      description: "",
      link: "https://www.nfsmaps.com.ng/"
    },
    {
      name: "Taxation Tool",
      dates: "",
      logo: "./assets/images/projects/taxation-tool.png",
      style: { "background-color": "rgba(255, 71, 71, 1)" },
      description: "",
      link: "http://taxation-tool.s3-website-us-east-1.amazonaws.com"
    },
    {
      name: "PAYGo Solar POC",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "iWorker Website",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "Leaf USSD Prototype",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "Truthalizer.ai",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "R2A Vendor Tracker",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "H2OME Integration",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "DataStack Prototype",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "Optimetriks Computer Vision",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    },
    {
      name: "App Generation Platform",
      dates: "",
      logo: "",
      style: "",
      description: "",
      link: ""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
