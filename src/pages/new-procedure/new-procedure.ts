import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';

/**
 * Generated class for the NewProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-procedure',
  templateUrl: 'new-procedure.html',
})
export class NewProcedurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public apiProvider:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProcedurePage');
  }

  createTramite(){
    // console.log(this.post.value)
    this.apiProvider.postTramite()
      .subscribe(res => {
        console.log(res)
        console.log('éxito')
        this.navCtrl.pop()
      }, (err) => {
        console.log(err);
    });
    }
}
