import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TextbuttonComponent } from './textbutton/textbutton.component';
import { TableComponent } from './table/table.component';
import { NopageComponent } from './nopage/nopage.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'text', component: TextbuttonComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: NopageComponent },
 

  
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TextbuttonComponent,
    TableComponent,
    NopageComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
