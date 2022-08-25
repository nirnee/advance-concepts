import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['../css/style.scss']
})
export class HeaderComponent implements OnInit {

  user: string = '';
  time: Date = new Date();
  constructor(
    public authService: AuthService
  ) { 
    setInterval(() => {
      this.time = new Date();
    }, 1000)
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userData") || "{}")?.name;
  }

}
