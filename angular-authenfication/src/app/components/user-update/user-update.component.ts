import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../shared/user';



@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  updateForm: FormGroup;
  currentUser: User;

  constructor(
  public fb: FormBuilder,
  public authService: AuthService,
  public router: Router,
  private actRoute: ActivatedRoute
)
  {
    this.updateForm = this.fb.group({
      _id:[''],
      name: [''],
      email: [''],
      password: ['']
    })
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe( res => {
         this.currentUser = res.msg;

       });
  }


  ngOnInit() {}

  update() {
    console.log(this.currentUser);
    this.authService.update(this.currentUser).subscribe((res) => {
      if (res !== null) {
        this.updateForm.reset();
        this.router.navigate(['user-profile/' + this.currentUser._id]);
      }
    })
  }
  annuler()
  {
    this.router.navigate(['/user-profile/' + this.authService.getCurrentUserId()])
  }
}
