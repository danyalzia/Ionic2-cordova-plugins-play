import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { BrightnessPage } from '../pages/brightness/brightness';
import { CallnumberPage } from '../pages/callnumber/callnumber';
import { VibrationPage } from '../pages/vibration/vibration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CameraPage;
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
	
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Camera', component: CameraPage },
      { title: 'Geolocation', component: GeolocationPage },
	  { title: 'Brightness', component: BrightnessPage },
	  { title: 'Callnumber', component: CallnumberPage },
	  { title: 'Vibration', component: VibrationPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
