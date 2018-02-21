import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { StorageServiceModule} from 'angular-webstorage-service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

import { AuthguardGuard} from './_services/authguard.guard'
import { UserService} from './_services/user.service';
import { PostService} from './_services/post.service';
import { DataService} from './_services/data.service';

import { ReversePipe } from './_pipes/reverse.pipe';
import { FilterPipe } from './_pipes/filter.pipe';

const appRoutes: Routes = [
	{
	   path: '',
	   redirectTo: '/login',
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
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthguardGuard, PostService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
