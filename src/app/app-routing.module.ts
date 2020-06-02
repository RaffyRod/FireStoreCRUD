import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'nueva', component: NuevaRecetaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent },
  {path: 'details/:id', component: DetailsComponent },  // siemprew recibe un parametro, por lo que se le pasa el ID
  {path: 'edit/:id', component: EditComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
