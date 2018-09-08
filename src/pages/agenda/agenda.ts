import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaDetailPage } from '../../pages/agenda-detail/agenda-detail'

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  appoints: Array<{id: number, title: string }>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.appoints = [
      {id: 1, title: "Cita SRE Pasaporte"},
      {id: 2, title: "Cita Ministerio Público Reporte de Robo"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  goToDetail(id: number){
    this.navCtrl.push(AgendaDetailPage, id)
  } 

}
