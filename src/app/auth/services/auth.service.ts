import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor( 
        private http: HttpClient
    ) { }

    userSignup(data: any): boolean {
        this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/signup', data)
        .subscribe({
            next:(response)=>{
                return true;
            },
            error:(error)=>{
                return false;
            }
        });
        return false;
    }

    setUserInfo(data: any) {
        localStorage.clear();
        localStorage.setItem('token', data.access_token);
    }

     userLogin(data: any): any {
        this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/login', data)
        .subscribe({
            next:(response)=>{
                localStorage.setItem('userData',JSON.stringify(response));
            },
            error:(error)=>{
                console.log(error);
            }
        });
    }
}
