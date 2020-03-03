import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private http: HttpClient


  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  pingServer(location) {
         this.http
           .post('http://localhost:4000/ping', location)
           .subscribe((res) => {});
       }
  ngOnInit()
  {
    if ('geolocation' in navigator) {

          navigator.geolocation.getCurrentPosition((position) => {
            this.pingServer({
              lat: position.coords.latitude,
              lng: position.coords.longitude,

            });
          });
        }

  }

  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }
}
