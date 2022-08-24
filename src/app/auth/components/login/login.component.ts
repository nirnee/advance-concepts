import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
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
  loginForm = this.formBuilder.group({
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
  });

  isError : boolean = false;
  errorMessage: string = '';

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
      this.authService.userLogin(data).subscribe({
            next:(response: any)=>{
              this.router.navigate(['admin']).then(() => {
                window.location.reload();
              });

            },
            error:(error : any)=>{
                //if credentials are not valid show error message
                this.isError = true;
                this.errorMessage =  error;
            }
        });
    }
  }
}
