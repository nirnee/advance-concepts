import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apis, { header } from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(
    private http: HttpClient
  ) { }
  getBots(){
      return this.http.get(apis.admin.bots, {
            headers:header
        });
  }
}
