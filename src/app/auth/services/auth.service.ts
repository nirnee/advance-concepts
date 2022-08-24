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

    userSignup(data: any): any {
        return this.http.post(apis.auth.signup, data);
    }

    setUserInfo(data: any) {
        localStorage.clear();
        localStorage.setItem('token', data.access_token);
    }

     userLogin(data: any): any {
        return this.http.post(apis.auth.login, data).pipe(
            tap((response: any)=>{
                localStorage.setItem('userData',JSON.stringify(response));
                this.userData = response;
               // this.router.navigateByUrl('/admin')
            })
        )      
    }

    logout(){
        this.userData = {};
        localStorage.setItem("userData", "{}");
        this.router.navigateByUrl('auth');
    }
}
