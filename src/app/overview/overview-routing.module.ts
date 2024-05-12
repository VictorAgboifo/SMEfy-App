import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
    children: [
      {
        path: 'analytics',children: [{path: '',loadChildren: () => import ('../analytics/analytics.module').then(m => m.AnalyticsPageModule)}]
      },

      {
        path: 'metrics',children: [{path: '',loadChildren: () => import('../metrics/metrics.module').then( m => m.MetricsPageModule)}]
      },

     
      {
        path: '',
        redirectTo: '/overview/analytics',
        pathMatch: 'full',
      }
    ]
  },
  /*{
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  }*/
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}







