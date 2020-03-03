import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';



 export class Location {
   _id: string;
   name: string;
   distance: number;
   address: string;
   rating: number;
   facilities: [string];
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.doLogout()
  }

}
