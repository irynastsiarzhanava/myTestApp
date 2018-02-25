import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { StorageServiceModule} from 'angular-webstorage-service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

import { AuthguardGuard} from './_services/authguard.guard'
import { UserService} from './_services/user.service';
import { PostService} from './_services/post.service';

import { ReversePipe } from './_pipes/reverse.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { ModalContentComponent } from './modal-content/modal-content.component';

const appRoutes: Routes = [
	{
	   path: '',
	   redirectTo: '/dashboard',
	   pathMatch: 'full'
	},
	{
	   path: 'login',
	   component: LoginFormComponent
	},
	{
	   path: 'dashboard',
	   canActivate: [AuthguardGuard],
	   component: DashboardComponent
	},
      {
          path: 'posts/:id',
          component: DetailsComponent
      },
	{
	    path: '**',
	    component: NotfoundComponent
	}
]

@NgModule({
  declarations: [
    ReversePipe,
    FilterPipe,
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    NotfoundComponent,
    DetailsComponent,
    ModalContentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthguardGuard, PostService],
  bootstrap: [AppComponent, ModalContentComponent]
})
export class AppModule { }
