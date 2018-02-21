import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DataService {

  private postId = new Subject <any>();
  currentId = this.postId.asObservable();

  constructor() { }

}