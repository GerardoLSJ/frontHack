import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-detail',
  templateUrl: 'agenda-detail.html',
})
export class AgendaDetailPage {

  title: string
  bullets: Array<{title: string, marked: boolean}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bullets = [
      {title: "Acta de nacimiento actualizada", marked: false}, 
      {title: "2 fotografías tamaño infantil tamaño mate", marked: false},
      {title: "Comprobante de pago por el monto de $954.00 MXN", marked: false}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetailPage');
  }

}
