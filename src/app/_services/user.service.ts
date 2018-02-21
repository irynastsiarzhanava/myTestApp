import { Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService, isStorageAvailable} from 'angular-webstorage-service';

export const sessionStorageAvailable = isStorageAvailable(sessionStorage);

@Injectable()
export class UserService {

private isUserLoggedIn;


  constructor() {
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }


  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }
}
