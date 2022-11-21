import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import apis from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
    userData: any = null;

    constructor( 
        private http: HttpClient,
        private router: Router
    ) {
        this.userData = localStorage.getItem('userData') || "{}";
        this.userData = JSON.parse(this.userData);
     }

    //returns user signup api
    userSignup(data: any): any {
        return this.http.post(apis.auth.signup, data);
    }

    //set user token function
    setUserInfo(data: any) {
        localStorage.clear();
        localStorage.setItem('token', data.access_token);
    }

    //returns userLogin api
    userLogin(data: any): any {
        return this.http.post(apis.auth.login, data).pipe(
            tap((response: any)=>{
                localStorage.setItem('userData',JSON.stringify(response));
                this.userData = response;
               // this.router.navigateByUrl('/admin')
            })
        )      
    }

    //clear local storage on logout
    logout(){
        this.userData = {};
        localStorage.setItem("userData", "{}");
        this.router.navigateByUrl('auth');
    }
}
