import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  showAll = false;
  displayLimit = 8

  organizations = [
    {
      name: 'BFA',
      logo: "./assets/images/organizations/bfa-logo.png",
      link: ''
    },
    {
      name: 'Safe Water Network',
      logo: "./assets/images/organizations/swn-logo.png",
      link: ''
    },
    {
      name: 'Turaco',
      logo: "./assets/images/organizations/turaco-logo.png",
      link: ''
    },
    {
      name: 'Leaf',
      logo: "./assets/images/organizations/leaf-logo.png",
      link: ''
    },
    {
      name: 'Mastercard Foundation',
      logo: "./assets/images/organizations/mcf-logo.png",
      link: ''
    },
    {
      name: 'Rockefeller Philanthropy Advisors',
      logo: "./assets/images/organizations/rpa-logo.png",
      link: ''
    },
    {
      name: 'Bill and Melinda Gates Foundation',
      logo: "./assets/images/organizations/bmgf-logo.png",
      link: ''
    },

    {
      name: 'Bytemark',
      logo: "./assets/images/organizations/bytemark-logo.jpg",
      link: ''
    },
    {
      name: 'Central Bank of Nigeria',
      logo: "./assets/images/organizations/cbn-logo.png",
      link: ''
    },
    {
      name: 'Nigeria Interbank Settlement System',
      logo: "./assets/images/organizations/nibss-logo.png",
      link: ''
    },
    {
      name: 'GSMA',
      logo: "./assets/images/organizations/gsma-logo.jpg",
      link: ''
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
