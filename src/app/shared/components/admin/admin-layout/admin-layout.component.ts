import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['../css/style.scss'],
})
export class AdminLayoutComponent {
  @Input() tableData: any = [];
  @Input() uiConfig: any = [];
  @Output() deleteEvent = new EventEmitter<string>();
  constructor() {
    //comment here
  }

  //delete function
  delete(id: string) {
    alert('shared ' + id);
    this.deleteEvent.emit(id);
  }
}
