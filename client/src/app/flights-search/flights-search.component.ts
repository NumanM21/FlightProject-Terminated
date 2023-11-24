import { Component } from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {

  searchResults: any[] = [
    "American Airlines(USA)",
    "Delta Airlines(USA)",
    "United Airlines(USA)",
    "Emirates(UAE)",
    "Lufthansa(GER)",
    "British Airways(UK)", 
  ]



  constructor() {}

  ngOnInit() {
    this.searchResults
  }

}
