import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  /* TODO:
  - Show only top 6 until show all button is pressed
  - Add hover over states
  - 'More info' pane with links to articles and demos
  */

  showAll = false;
  displayLimit = 6

  projects = [
    {
      name: "NFS MAPS",
      dates: "",
      logo: "./assets/images/projects/nfsmaps.png",
      style: { "background": "linear-gradient(to bottom left , #303B4A, #2C3743)" },
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
      name: "iWorker Website",
      dates: "",
      logo: "./assets/images/projects/iworker-project.png",
      style: { "background": "linear-gradient(to bottom right, #AECECB,#8DB7B4, #76ABA6, #699795, #46666A, #243742)" },
      description: "",
      link: "https://www.iworkerproject.org"
    },
    {
      name: "Truthalizer.ai",
      dates: "",
      logo: "./assets/images/projects/truthalizer.png",
      style: { "background-color": "#eeeeee", "border": "1px solid #bbbbbb" },
      description: "",
      link: ""
    },
    {
      name: "PAYGo Solar POC",
      dates: "",
      logo: "./assets/images/projects/paygo-lead-finder.png",
      style: { "background-color": "#139e80" },
      description: "",
      link: ""
    },
    {
      name: "Leaf USSD Prototype",
      dates: "",
      logo: "./assets/images/projects/leaf-logo.png",
      style: { "background-color": "#ffffff", "border": "1px solid #bbbbbb" },
      description: "",
      link: ""
    },
    {
      name: "GSMA Mobile Money API Review",
      dates: "",
      logo: "./assets/images/projects/gsma-mobile-money-review.png",
      style: { "background-color": "#ffffff", "border": "1px solid #000000" },
      description: "",
      link: ""
    },
    {
      name: "Optix Report",
      dates: "",
      logo: "./assets/images/projects/optix.png",
      style: { "background-color": "#4666BB" },
      description: "",
      link: "https://optixproject.org/report"
    },
    {
      name: "R2A Vendor Database",
      dates: "",
      logo: "./assets/images/projects/r2a-vendor-db.png",
      style: { "background-color": "#0a2d37" },
      description: "",
      link: ""
    },
    {
      name: "R2A Deployment Tracker",
      dates: "",
      logo: "./assets/images/projects/r2a-regtech-tracker.png",
      style: { "background-color": "#0a2d37" },
      description: "",
      link: ""
    },
    {
      name: "H2OME Integration",
      dates: "",
      logo: "./assets/images/projects/h2ome.png",
      style: { "background-color": "#3F3EBA" },
      description: "",
      link: ""
    },
    {
      name: "AI Readiness Toolkit",
      dates: "",
      logo: "./assets/images/projects/ai-readiness-toolkit.png",
      style: { "background": "linear-gradient(to left , #FDB850, #F3C551, #E8D34F, #E4CF50, #E1CB51, #D2AA57)" },
      description: "",
      link: ""
    },
    {
      name: "DataStack Prototype",
      dates: "",
      logo: "./assets/images/projects/datastack.png",
      style: { "background-image": "url('./assets/images/projects/header-profile.png')", "background-color": "#2f4050", "background-size": "cover" },
      description: "",
      link: ""
    },
    {
      name: "Optimetriks Computer Vision",
      dates: "",
      logo: "./assets/images/projects/optimetriks.png",
      style: { "background-color": "#ffffff", "border": "1px solid #bbbbbb" },
      description: "",
      link: ""
    },
    {
      name: "Bytemark Mobile App Generator",
      dates: "",
      logo: "./assets/images/projects/bytemark-mobile-app-generator.png",
      style: { "background": "linear-gradient(to bottom right, #5C97D9,#5183C7, #4B67AF, #5C4B9B, #65328E, #4D2663)" },
      description: "",
      link: ""
    }
  ]

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit() {
  }

}
