import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FactoryTarget } from '@angular/compiler';
import { ForgotpsswordComponent } from './forgotpassword/forgotpssword.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import { AddingrestaurantComponent } from './addingrestaurant/addingrestaurant.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'register',component:TemplateDrivenComponentComponent},
  { path:'psssword',component:ForgotpsswordComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'help',component:HelpComponent},
  {path:'add',component:AddingrestaurantComponent},
  {path:'createAccount',component:CreateaccountComponent},
  {path:'createAtm',component:CreateatmComponent},
  {path:'searchAccount',component:LoansearchComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
