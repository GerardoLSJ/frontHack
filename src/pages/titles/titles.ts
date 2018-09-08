import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail'
/**
 * Generated class for the TitlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-titles',
  templateUrl: 'titles.html',
})
export class TitlesPage {

  titles : Array<{id: number, title : string, description : string}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlesPage');
    this.titles = [
      {
        id: 1, 
        title: "Exceso de velocidad", 
        description: "La ley indica que el méximo de velocidad en vías primarias es de 45 km/h"

      },
      {
        id: 2, 
        title: "Beber mientras conduces", 
        description: "Las infracciones por beber mientras se conduce un vehículo son de 50 salarios mínimos"
      },
      {
        id: 3, 
        title: "Pasarte un alto", 
        description: "Pasarte un alto implica 25 horas de arresto y 4 salarios mínimos de multa"

      },
    ]
  }

  goToDetail(id : number){
    this.navCtrl.push(DetailPage, id)
  }
} 
