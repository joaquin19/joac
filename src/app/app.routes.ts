import { RouterModule, Routes } from '@angular/router';
import {MiPerfilrComponent} from './components/mi-perfilr/mi-perfilr.component';
import {PerfilesComponent} from './components/perfiles/perfiles.component';
import {PerfilComponent} from './components/perfiles/perfil.component';


const APP_ROUTES: Routes = [
  { path: 'miperfil', component: MiPerfilrComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'miperfil' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
