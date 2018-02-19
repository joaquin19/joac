

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Perfil } from '../interfaces/perfil.interface';
import 'rxjs/Rx';


@Injectable()
export class PerfilesService {

  fireHURL:string ="https://perfiles-be415.firebaseio.com/perfiles.json";
  upURL:string ="https://perfiles-be415.firebaseio.com/perfiles/";

  constructor(private http:Http) { }

  newPerfil(perfil:Perfil){
    let body = JSON.stringify(perfil);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.fireHURL, body, {headers})
                    .map(res =>{
                      console.log(res.json());
                      return res.json()
                    })
  }

  updatePerfil(perfil:Perfil, key$:string){
    let body = JSON.stringify(perfil);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${ this.upURL }/${ key$ }.json`;

    return this.http.put( url, body, {headers})
                    .map(res =>{
                      console.log(res.json());
                      return res.json()
                    })
  }

  getPerfil(key$:string){
    let url=`${this.upURL}/${key$}.json`;
    return this.http.get(url)
           .map(res => res.json());
  }

  getPerfiles(){
    return this.http.get(this.fireHURL)
           .map(res => res.json());
  }

  deletPerfil(key$:string){

    let url = `${this.upURL}/${key$}.json`;
    return this.http.delete(url)
               .map(res => res.json())

  }

}
