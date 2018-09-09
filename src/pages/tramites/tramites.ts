import { ApiProvider } from './../../providers/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TramiteDetailPage } from '../tramite-detail/tramite-detail';

/**
 * Generated class for the TramitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tramites',
  templateUrl: 'tramites.html',
})
export class TramitesPage {

  public tramites = []
  public tagList = []
  public cities = []
  public params = {}
  public mySearch = ""
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public apiProvider:ApiProvider) {
      this.getTramites()
      this.getCities()
      this.getTags()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TramitesPage');
  }

  getTramites(params?){

    this.apiProvider.getTramite(params).subscribe(
      (response:any)=>{
        this.tramites = response
      }
    )
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

  onCityFilter(id){
    console.log('cityID',id)
    this.params['city'] = id
    this.getTramites(this.params)
  }
  onTagsFilter(id){
    console.log('TAG ID',id)
    this.params['tags'] = id
    this.getTramites(this.params)

  }

  onSearch(ev){
    console.log(this.mySearch)
    this.getTramites({ search:this.mySearch})
  }
  onCancel(ev){
    this.mySearch = ""
    this.getTramites()
    console.log(ev)
  }

  detalle(proc){
    this.navCtrl.push(TramiteDetailPage, {data:proc})
  }
  filterBy(value){
    switch (value) {
      case value:
        
        break;
    
      default:
        break;
    }
  }

}
