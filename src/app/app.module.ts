import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { BrightnessPage } from '../pages/brightness/brightness';
import { CallnumberPage } from '../pages/callnumber/callnumber';
import { VibrationPage } from '../pages/vibration/vibration';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    GeolocationPage,
	BrightnessPage,
	CallnumberPage,
	VibrationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
	tabsPlacement: 'bottom',
	  platforms: {
		android: {
		  tabsPlacement: 'top'
		},
		ios: {
		  tabsPlacement: 'top'
		},
		windows:
		{
		  tabsPlacement: 'top'
		}
	  }
	})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    GeolocationPage,
	BrightnessPage,
	CallnumberPage,
	VibrationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
