import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
})


export class VerticalBarChartComponent  implements OnInit {

      // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
    @Input() view: any;
    @Input() legendPosition = LegendPosition.Below;
    colorScheme: any = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    single: any[] = [];
  
  constructor() { }

  ngOnInit() {
    this.single = [
      {
        "name": "Shoes",
        "value": 8940000
      },
      {
        "name": "Bags",
        "value": 5000000
      },
      {
        "name": "Shirt",
        "value": 7200000
      }
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

}
