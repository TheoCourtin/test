import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(public authService: AuthService, public actRouter: ActivatedRoute, public router: Router) { }

  logout() {
    this.authService.doLogout()
  }

  isAuthentificate(): boolean {
    return this.authService.isLoggedIn();
  }

  isOnIncription(): boolean {
    return this.actRouter.snapshot['_routerState'].url === '/signup';
  }

  isOnLogging(): boolean {
    return this.actRouter.snapshot['_routerState'].url === '/login';
  }

  redirectMainPage() {
    this.router.navigate(['/user-profile/' + this.authService.getCurrentUserId()])
  }

  isOnUserProfile(): boolean
  {
    return this.actRouter.snapshot['_routerState'].url.includes('/user-profile/');
  }

  isOnMap(): boolean
  {
    return this.actRouter.snapshot['_routerState'].url === '/map';
  }
}
