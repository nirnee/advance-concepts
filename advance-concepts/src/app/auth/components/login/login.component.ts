import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


//component to render login page
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  //lofin form
  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  isLoggedIn : boolean = false;
  validComment: boolean= true;

  ngOnInit(): void {
    //comment here
  }
  
  //submit
  submit(){
    if(this.loginForm.valid){
      let data = {
        username: this.loginForm.controls['name'].value,
        password: this.loginForm.controls['password'].value
      }
      this.authService.userLogin(data);
      let isUserLoggedIn = localStorage.getItem('userData');     
      if(isUserLoggedIn != null) {
        this.router.navigateByUrl('/dashboard');
      }
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }

  //signup
  signup(){
    this.router.navigateByUrl('/signup');
  }
}
