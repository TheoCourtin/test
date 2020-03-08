import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../shared/user';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  updateForm: FormGroup;
  currentUser: User;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }

  confirmDelete() {
    console.log(this.currentUser);
    this.authService.delete(this.currentUser).subscribe(res =>
      this.authService.doLogout(),
      err => window.alert("Error to remove the user :( ")
    )
  }

  annuler() {
    this.router.navigate(['/user-profile/' + this.authService.getCurrentUserId()])
  }
}
