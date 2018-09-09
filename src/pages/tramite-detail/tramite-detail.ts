import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TramiteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tramite-detail',
  templateUrl: 'tramite-detail.html',
})
export class TramiteDetailPage {

  public detail:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = this.navParams.get('data')
    console.log(this.detail)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TramiteDetailPage');
  }

}
