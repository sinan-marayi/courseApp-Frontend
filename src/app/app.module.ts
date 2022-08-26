import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';


const routes:Routes=[
  {path:"",component:AddcourseComponent},
  {path:"view",component:ViewcourseComponent},
  {path:"search", component:SearchcourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewcourseComponent,
    NavbarComponent,
    SearchcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
