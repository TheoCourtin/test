import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AuthGuard } from "./shared/auth.guard";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-update/:id', component: UserUpdateComponent, canActivate: [AuthGuard]},
  { path: 'user-delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard]},
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [LeafletModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
