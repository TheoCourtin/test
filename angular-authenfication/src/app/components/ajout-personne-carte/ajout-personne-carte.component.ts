import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { Personne } from '../../shared/personne';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajout-personne-carte',
  templateUrl: './ajout-personne-carte.component.html',
  styleUrls: ['./ajout-personne-carte.component.css']
})
export class AjoutPersonneCarteComponent implements OnInit {

  personupForm: FormGroup;
  private actRoute: any;
  // endpoint = 'http://localhost:4000/api';



  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private http: HttpClient
  ) {
    this.personupForm = this.fb.group({
      name: [''],
      long: [''],
      lati: ['']
    });
  }


  ngOnInit() {}

  registerPerson() {
    this.authService.personneSignUp(this.personupForm.value).subscribe();
    this.router.navigate(['map']);
    console.log('Ca marche');
  }

}
