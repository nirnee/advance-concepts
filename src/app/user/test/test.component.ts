import { Component } from '@angular/core';
/**
 * render test component
 */
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  /**
   * defining variables
   */
  name: string = 'nirneeta';
  /**
   * constructor
   */
  constructor() {}
}
