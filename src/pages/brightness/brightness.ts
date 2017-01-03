import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Brightness } from 'ionic-native';

@Component({
  selector: 'page-brightness',
  templateUrl: 'brightness.html'
})
export class BrightnessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrightnessPage');
  }

  changeBrightness() {
	  let brightnessValue: number = 0.7;
	  Brightness.setBrightness(brightnessValue);
  }
}
