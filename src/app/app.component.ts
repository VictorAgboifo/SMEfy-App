import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

   // { title: 'Premium Feature [P]', url: '/premium-feature', icon: 'ribbon' },
    { title: 'Product Management', url: '/product-management', icon: 'fast-food' },
    { title: 'Overview [P]', url: '/overview', icon: 'search-circle' },
   /* { title: 'Reviews', url: '/reviews', icon: 'chatbox-ellipses' },
    { title: 'Marketing', url: '/marketing', icon: 'megaphone' },
    { title: 'Promotions', url: '/promotions', icon: 'rocket' },
    { title: 'Customize', url: '/customize', icon: 'construct' },
    { title: 'Share', url: '/share', icon: 'share-social' },*/
    
 
  //{ title: 'Inbox', url: '/folder/inbox', icon: 'mail' },*/
  //{ title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
   
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public labels = [];
  constructor() {}
}




