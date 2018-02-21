import { Component, OnInit, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService, sessionStorageAvailable } from '../_services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})

@Injectable()
export class LoginFormComponent implements OnInit {

  user={
    username: '',
    password: ''
  }

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    console.log(`Session storage available: ${sessionStorageAvailable}`);
  }


  loginUser(e) {
      this.user={
        username: e.target.elements[0].value,
        password: e.target.elements[1].value
      }
      
  	if (this.user.username == 'Admin' && this.user.password == 'Admin111') {
  		this.userService.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}
  }
}
