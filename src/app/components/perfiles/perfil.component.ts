

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Perfil} from '../../interfaces/perfil.interface';
import {PerfilesService} from '../../services/perfiles.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  perfil:Perfil = {
    nombre:"",
    detalles:"",
    telefono:""
  }

  nuevo:boolean = false;
  id:string;

  constructor(private _perfilesService:PerfilesService,
              private router:Router,
              private activatedRout:ActivatedRoute) {

      this.activatedRout.params
      .subscribe(parametros => {

        this.id = parametros['id']
        if(this.id !== "nuevo"){
          this._perfilesService.getPerfil(this.id)
                   .subscribe(perfil => this.perfil = perfil)
        }
      });
    }

    ngOnInit() {
    }

    guardar(forma:NgForm){
      console.log("ngForm", forma);
      console.log("valor forma", forma);

      console.log("Usuario", this.perfil);

      console.log(this.perfil);

      if(this.id == "nuevo"){
        //insertando
        this._perfilesService.newPerfil(this.perfil)
                           .subscribe( data =>{
          this.router.navigate(['/heroe', data.name])
        },
        error => console.log(error));
      }else{
        //actualizando
        this._perfilesService.updatePerfil(this.perfil, this.id)
                           .subscribe( data =>{
                             console.log(data);
                           },
                         error => console.log(error));
      }

    }

    agregarNuevo(forma:NgForm){
      this.router.navigate(['/perfil', 'nuevo']);

      forma.reset({
        casa:""
      });
    }

}
