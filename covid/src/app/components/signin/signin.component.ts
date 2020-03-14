import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { User } from './../../model/user';
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
    });
  }

  ngOnInit() { }

  loginUser() {
    const user = new User(this.signinForm.value.email, this.signinForm.value.password);
    this.authService.signIn(user).subscribe(res => this.setSession(res), err => {
      console.log(err);
    });
  }

  private setSession(res) {
    this.authService.setToken(res.token);
    this.authService.getUserProfile(res._id).subscribe(resApi => {
      this.authService.setCurrentUser(resApi.msg);
      this.router.navigate(['/map/']);
    }, err => console.log(err));
  }
}
