import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string = '';
  time: Date = new Date();
  constructor() { 
    setInterval(() => {
      this.time = new Date();
    }, 1000)
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userData") || "{}")?.user;
  }

}
