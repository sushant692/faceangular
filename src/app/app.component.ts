import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js'

import { SearchService } from './search.service';

import { Search } from './Search';

import { SEARCH } from './Search-Data';

import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  title = 'Project';

  LineChart=[];

  private CurrentSearchValue : Search;

  private pastSearchValue : Search[] = []

  constructor(private searchservice: SearchService) { }



  getClick(SearchElement : string): void {

  	this.CurrentSearchValue = this.searchservice.getClick(SearchElement);

    //restoring Search Results

    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();

    this.pastSearchValue.push(this.CurrentSearchValue);

  }



  ngOnInit()

  {

    this.LineChart = new Chart('lineChart', {

      type: 'line',

    data: {

     labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],

     datasets: [{

         label: 'Number of Items Sold in Months',

         data: [3,6,7,9,5,10,11,8,16,4,13,2],

         fill:false,

         lineTension:0.3,

         borderColor:"pink",

         borderWidth: 2

     }]

    }, 

    options: {

     title:{

         text:"Line Chart",

         display:true

     },

     scales: {

         yAxes: [{

             ticks: {

                 beginAtZero:true

             }

         }]

     }

    }

    });

  }

}