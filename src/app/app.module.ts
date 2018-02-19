import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//SERVICIOS
import {PerfilesService} from './services/perfiles.service';

//RUTAS
import {APP_ROUTING} from './app.routes';


//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiPerfilrComponent } from './components/mi-perfilr/mi-perfilr.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfiles/perfil.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PerfilesComponent,
    PerfilComponent,
    KeysPipe,
    NavbarComponent,
    MiPerfilrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [PerfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
