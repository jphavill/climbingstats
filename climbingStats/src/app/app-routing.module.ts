import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TextspageComponent } from './textspage/textspage.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LandingPageComponent},
  {path: 'text', component: TextspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, LandingPageComponent, TextspageComponent]
