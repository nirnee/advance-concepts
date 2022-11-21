import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apis, { header } from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(
    private http: HttpClient
  ) {
    //comment here
  }

  //returns getFaqs api
  getFaq(){   
        return this.http.get(apis.admin.faq, {
            headers:header
        });
    }
}
