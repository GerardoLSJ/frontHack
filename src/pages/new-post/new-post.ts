import { ApiProvider } from './../../providers/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the NewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  private formLey : FormGroup
  public tagList: any
  public cities = []
  public requisitos = [{value:''}]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private formBuilder: FormBuilder, 
    public apiProvider: ApiProvider,
    public http: HttpClient ){
    
    this.getTags()
    this.getCities()

    this.formLey = this.formBuilder.group({
      title: ['', Validators.required],
      summary: [''],
      bullets: [], 
      law: '', 
      reference: '', 
      tags: [''], 
      notes: 'Sin comentarios',
      city: []
      });
    }


  createLey(){
    console.log(this.formLey.value)
    this.apiProvider.postLey(this.formLey.value)
      .subscribe(res => {
        console.log('éxito')
        console.log(res)
        this.navCtrl.pop()
      }, (err) => {
        console.log(err);
    });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  agregarCampo(){
    this.requisitos.push({value:''})
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
