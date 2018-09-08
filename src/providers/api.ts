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

  postTramite(){
    return this.http.post('https://lex-app48.herokuapp.com/api/law/', 'this.post.value')
  
  }

  getTramite(){

  }

  postLey(ley){
    return this.http.post('https://lex-app48.herokuapp.com/api/law/', ley)

  }

  getLey(){

  }

  getCities(){
    return this.http.get('https://lex-app48.herokuapp.com/api/city/')
  }
  getTags(){
    return this.http.get('https://lex-app48.herokuapp.com/api/tags/')
  }
}
