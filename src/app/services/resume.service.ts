import { Injectable } from '@angular/core';
import * as d3 from "d3"


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  isLoading = false

  resumeURLs: Array<string> = [
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=1837361825&single=true&output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=1847563364&single=true&output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=497744871&single=true&output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=239821050&single=true&output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=81447926&single=true&output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSExAuVSyBExZ5gBD2-vvVPcF5YGsm50qy2qzTVlAGwSpiwxPd80lMnIXyZW_pcJKCZyHhBlZyyhRT0/pub?gid=2009638069&single=true&output=csv"
  ]

  resume = {
    about: undefined,
    experience: undefined,
    projects: undefined,
    organizations: undefined,
    sideProjects: undefined,
    testimonials: undefined
  }

  constructor() {
    this.isLoading = true
    this.loadCSVURLs(this.resumeURLs, (values, error) => {
      this.isLoading = false
      console.log("Got values", values)


      this.resume = values.reduce((acc, val, idx) => {
        if (idx === 0) { // About
          acc.about = this.arrayToDict(val, "key", "value")['about']
        } else if (idx === 1) { // Experience
          val = this.split(val, "supportingDetails")
          acc.experience = val
        } else if (idx === 2) { // Projects
          val = this.parse(val, "style")
          val = this.split(val, "images")
          val = this.split(val, "clients")
          console.log("Parsed val", val)
          acc.projects = val
        } else if (idx === 3) {
          acc.organizations = val
        } else if (idx === 4) {
          acc.sideProjects = val
        } else if (idx === 5) {
          val = this.parse(val, "testimonial")
          acc.testimonials = val
        }
        return acc
      }, this.resume)
      console.log("Got resume", this.resume)

    }, (error) => {
      console.warn(error)
    })
  }

  parse(val, key) {
    return val.map(e => {
      console.log("JSON Parse", e[key])
      e[key] = JSON.parse(e[key])
      return e
    })
  }

  split(val, key) {
    return val.map(e => {
      e[key] = e[key].split(",").map(item => item.trim())
      return e
    })
  }

  loadCSVURLs(urls, callback, error) {
    Promise.all(urls.map(url => d3.csv(url))).then(callback).catch(error)
  }

  arrayToDict(array, key, value?) {
    return array.reduce((acc, el) => {
      acc[el[key]] = value ? el[value] : el
      return acc
    }, {})
  }
}
