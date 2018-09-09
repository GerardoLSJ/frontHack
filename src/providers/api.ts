import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  postTramite(tramite){
    return this.http.post('https://lex-app48.herokuapp.com/api/procedure/', tramite)
  }

  getTramite(params?){
    let url = 'https://lex-app48.herokuapp.com/api/procedure/?'
    if(params){
      for (let k in params){
        url += `${k}=${params[k]}&`
        //console.log(url)
      }
    }
    return this.http.get(url)
  }

  postLey(ley){
    return this.http.post('https://lex-app48.herokuapp.com/api/law/', ley)

  }

  postAudio(audio){
    console.log('AUDIO CALLED:')
    console.log(audio)
    return this.http.post('http://127.0.0.1:8000/api/audio/', audio)
  }


  getLey(){
    return this.http.get('https://lex-app48.herokuapp.com/api/law/')

  }

  getCities(){
    return this.http.get('https://lex-app48.herokuapp.com/api/city/')
  }
  getTags(){
    return this.http.get('https://lex-app48.herokuapp.com/api/tags/')
  }
}
