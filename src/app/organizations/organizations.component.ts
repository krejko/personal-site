import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations = [
    {
      name: 'SafeWater Network',
      logo: '',
      link: ''
    },
    {
      name: 'GSMA',
      logo: '',
      link: ''
    },
    {
      name: 'Rockefeller Philanthropy Advisors',
      logo: '',
      link: ''
    },
    {
      name: 'Bill and Melinda Gates Foundation',
      logo: '',
      link: ''
    },
    {
      name: 'Central Bank of Nigeria',
      logo: '',
      link: ''
    },
    {
      name: 'Nigeria Interbank Settlement System',
      logo: '',
      link: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
