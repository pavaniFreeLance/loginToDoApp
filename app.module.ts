import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
//import { MaterialModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';

import { MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,

],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
     MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
   MatFormFieldModule,


    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ]),


],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

