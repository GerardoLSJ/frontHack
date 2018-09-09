import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  private formProc : FormGroup
  public tagList = [ ]
  public cities = []
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder:FormBuilder,
    public apiProvider:ApiProvider) {

    this.formProc = this.formBuilder.group({
      title: ['', Validators.required],
      summary: [''],
      steps: [], 
      reference: '', 
      tags: [''], 
      notes: 'Sin comentarios',
      city: [],
      rating: []
      });
      this.getTags()
      this.getCities()

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

    getTags() {
      this.apiProvider.getTags()
        .subscribe((data: any) => {
          console.log(data)
          this.tagList = data
        })
    }
  
    getCities() {
      this.apiProvider.getCities()
        .subscribe((data: any) => {
          console.log(data)
          this.cities = data
        })
    }
}
