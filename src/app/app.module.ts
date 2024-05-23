import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment'; // Adjust the path as necessary

// Import feature modules
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';




@NgModule({
  declarations: [AppComponent, VerticalBarChartComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    BrowserAnimationsModule,
    NgxChartsModule,
    IonicModule,
    CommonModule,
   // VerticalBarChartComponent,
    // Feature modules
    AuthModule,
    ProductModule,
    CartModule,
    OrderModule,
    NgxChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  exports: [VerticalBarChartComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}











