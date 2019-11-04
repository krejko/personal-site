import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss']
})
export class SideProjectsComponent implements OnInit {


  projects = [
    {
      name: "Neato Keen Productions",
      dates: "",
      circleLogo: "./assets/images/side-projects/nkp-logo-circle.png",
      textLogo: "./assets/images/side-projects/nkp-logo-text.png",
      description: "NeatoKeen Productions is a ...",
      link: "https://nkp.io"
    },
    {
      name: "TADTOY",
      dates: "",
      circleLogo: "./assets/images/side-projects/tadtoy-logo-circle.jpeg",
      textLogo: "./assets/images/side-projects/tadtoy-logo-text.png",
      description: "TADTOY is a social media platform focused on...",
      link: "http://tadtoy.com"
    },
    {
      name: "₮ЯᗑƆ₭Ƨ",
      dates: "",
      circleLogo: "./assets/images/side-projects/tracks-logo-circle.png",
      textLogo: "./assets/images/side-projects/tracks-logo-text.png",
      description: "TRACKS Music is where ...",
      link: "http://tracks.media"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
