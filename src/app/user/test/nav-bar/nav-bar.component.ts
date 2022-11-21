import { Component, Input } from '@angular/core';
import { TestService } from '../../test.service';
/**
 * render app-nav-bar component
 */
@Component({
  selector: 'app-nav-bar',
  template: `<button (click)="click()">click me</button>
    <button (click)="click2()">send message</button> `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class NavBarComponent {
  /**
   * defining variables
   */
  @Input() component: any;
  /**
   * constructor
   */
  constructor(private service: TestService) {}
  /**
   * test click function
   */
  click() {
    console.log(this.component.variable);
  }
  /**
   * test click2 function
   */
  click2() {
    this.service.sendValue('save data');
  }
}
