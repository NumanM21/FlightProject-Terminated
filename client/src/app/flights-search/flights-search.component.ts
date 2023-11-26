import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {

  searchResults: FlightsRm[] = [
    {
      airline: "American Airlines(USA)",
      departure: {time:Date.now().toString(), place: "New York"},
      arrival: {time:Date.now().toString(), place: "Karachi"},
      price: "1000",
      numberOfSeatsAvailable: 280
    },
    {
      airline: "Emirates(UAE)",
      departure: {time:Date.now().toString(), place: "Dubai"},
      arrival: {time:Date.now().toString(), place: "Bali"},
      price: "1500",
      numberOfSeatsAvailable: 480
    },
    {
      airline: "British Airways(UK)",
      departure: {time:Date.now().toString(), place: "London"},
      arrival: {time:Date.now().toString(), place: "Istanbul"},
      price: "300",
      numberOfSeatsAvailable: 180
    },

  ]



  constructor() {}

  ngOnInit(): void {
   
  }

}

export interface FlightsRm {
 airline: string;
 arrival: TimePlaceRM; // arrive is bound to place and time
 departure: TimePlaceRM; 
 price: string;
 numberOfSeatsAvailable: number;
}

export interface TimePlaceRM { // both values come in as strings
  place: string;
  time: string;
}
