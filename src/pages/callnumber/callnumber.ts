import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {CallNumber} from 'ionic-native';

@Component({
  selector: 'page-callnumber',
  templateUrl: 'callnumber.html'
})
export class CallnumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallnumberPage');
  }
  
  callNumber() {
	  CallNumber.callNumber("12001010201", true)
	  .then(() => console.log('Dialer is launched!'))
	  .catch(() => console.log('Error launching dialer'));
	}
}
