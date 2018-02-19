
import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: []
})
export class PerfilesComponent implements OnInit {

  perfiles:any[] = [];
  loading:boolean = true;

  constructor(private _perfilesService:PerfilesService) {

    this._perfilesService.getPerfiles()
        .subscribe(data => {

          this.perfiles = data;
          this.loading = false;
        })
  }

  deletPerfil(key$:string){

    this._perfilesService.deletPerfil(key$)
        .subscribe(data =>{
          if(data){
            console.log(data);
          }else{
            //todo va bien
            delete this.perfiles[key$];
          }
        })

  }

  ngOnInit() {
  }

}
