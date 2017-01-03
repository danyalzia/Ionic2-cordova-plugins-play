import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vibration } from 'ionic-native';

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html'
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  createVibration() {
	// Vibrate for 2 seconds
	Vibration.vibrate(2000);

	// Vibrate 2 seconds
	// Pause for 1 second
	// Vibrate for 2 seconds
	// Patterns work on Android and Windows only
	Vibration.vibrate([2000,1000,2000]);
	// Stops the vibration now
	Vibration.vibrate(0);
  }
}
