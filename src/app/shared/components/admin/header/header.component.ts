import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['../css/style.scss'],
})
export class HeaderComponent implements OnInit {
  //define variables
  user: string = '';
  time: Date = new Date();
  isEnable: false;

  constructor(
    private translate: TranslateService,
    public authService: AuthService
  ) {
    translate.setDefaultLang('en');
    //below code will display current time
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}')?.name;
  }

  /**
   * translate strings into selected language
   * @param language string
   */
  useLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }
}
