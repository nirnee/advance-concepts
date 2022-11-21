import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
/**
 * render app-hello component
 */
@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent implements OnInit {
  /**
   * defining input variables
   */
  @Input() name: string;
  /**
   * defining local variables
   */
  variable = false;

  constructor(private service: TestService) {}
  /**
   * ngOnInit life cycle hooks
   */
  ngOnInit() {
    this.variable = true;
    this.service.myObservable.subscribe((res) => {
      console.log(res);
    });
  }
}
