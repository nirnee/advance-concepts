import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TestService {
  private mySubjectSource = new Subject<any>();
  myObservable = this.mySubjectSource.asObservable();

  constructor() {}

  sendValue(value: any) {
    this.mySubjectSource.next(value);
  }
}
