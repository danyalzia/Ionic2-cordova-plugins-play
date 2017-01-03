import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Geolocation} from 'ionic-native';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
  
  latitude: any;
  longitude: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }
  
  getLocation() {
	Geolocation.getCurrentPosition().then(pos => {
		this.latitude = pos.coords.latitude;
		this.longitude = pos.coords.longitude;
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    // to stop watching
    watch.unsubscribe(); 
  }
  
  getLatitude() {
	  return "Latitude: " + this.latitude;
  }
  
  getLongitude() {
	  return "Longitude: " + this.longitude;
  }
}
