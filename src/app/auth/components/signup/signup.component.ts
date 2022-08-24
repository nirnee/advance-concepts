import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


//component to render signup page
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { 
    //comment here
  }

  passwordNotMatch: boolean = false;
  isError : boolean = false;
  errorMessage: string = '';

  //signup form
  signUpForm = this.formBuilder.group({
    firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    cpassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
  });
  
  ngOnInit(): void {
    //comment here
  }

  //submit function
  submit(){
    this.passwordNotMatch = false;
    if(this.signUpForm.valid){
      if(this.signUpForm.controls['password'].value == this.signUpForm.controls['cpassword'].value) {
        let data = {
          name: this.signUpForm.controls['firstName'] ?.value + ' ' + this.signUpForm.controls['lastName']?.value,
          email: this.signUpForm.controls['email'].value,
          password: this.signUpForm.controls['password'].value,
          cpassword: this.signUpForm.controls['cpassword'].value
        }
      this.authService.userSignup(data)
        .subscribe({
            next:(response: any)=>{                
              this.router.navigateByUrl('/login');
            },
            error:(error: any)=>{
              //if signup form values are not valid display error message
              this.isError = true;
              this.errorMessage =  error;
            }
        });
      } else {
        this.passwordNotMatch = true;
      }
    } 
  }

}
