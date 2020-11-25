import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'add', component: AddComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];