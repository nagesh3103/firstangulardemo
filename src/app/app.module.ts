import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ForgotpsswordComponent } from './forgotpassword/forgotpssword.component';
import { MaskDirective } from './mask.directive';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HelpComponent } from './component/help/help.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddingrestaurantComponent } from './addingrestaurant/addingrestaurant.component';
import { RatingComponent } from './rating/rating.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpsswordComponent,
    MaskDirective,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    AddressComponent,
    UserComponent,
    AddingrestaurantComponent,
    RatingComponent,
    CreateaccountComponent,
    CreateatmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
