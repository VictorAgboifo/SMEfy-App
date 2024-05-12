import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements AfterViewInit {
  @ViewChild('revenueVsOrdersChart', { static: false }) revenueVsOrdersCanvas: ElementRef;
  @ViewChild('salesByCategoryChart', { static: false }) salesByCategoryCanvas: ElementRef;
  totalSales: string | number = 132232.45;
  visitors: string | number = 232544;

  constructor() { }

  ngAfterViewInit() {
    this.initRevenueVsOrdersChart();
    this.initSalesByCategoryChart();
  }

  initRevenueVsOrdersChart() {
    let ctx = this.revenueVsOrdersCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Revenue',
            data: [/* Revenue data for each month */],
            fill: false,
            borderColor: '#4bc0c0'
          },
          {
            label: 'Orders',
            data: [/* Orders data for each month */],
            fill: false,
            borderColor: '#565656'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  initSalesByCategoryChart() {
    let ctx = this.salesByCategoryCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Fashion', 'Mobiles'],
        datasets: [
          {
            data: [/* Sales data for each category */],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
