import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  id: number
  title: string
  description: string
  bullets: Array<string>
  notes: string
  link: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = "Manejar a exceso de velocidad"
    this.description = "La ley indica que el méximo de velocidad en vías primarias es de 45 km/h"
    this.bullets = [
      "Detener tu vehículo en cuanto puedas", 
      "Preguntar el motivo de tu detención",
      "No necesitas bajar la ventana del conductor, solo mostrar tu identificación", 
    ]
    this.notes = "Aquí se puede agregar la cantidad deseada de notas adicionaes, estas pueden variar por país."
    this.link = "http://wikipedia.com"
    console.log('ionViewDidLoad DetailPage');
  }

}
