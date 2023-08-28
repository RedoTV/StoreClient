import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { IdentityRoomComponent } from './components/identity-room/identity-room.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { 
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path:'signin',
    component: SignInComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'identity',
    component: IdentityRoomComponent,
    canActivate: [SignInComponent, RegisterComponent]
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
