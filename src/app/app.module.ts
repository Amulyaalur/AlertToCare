import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertToCareHomePageComponent } from './alert-to-care-home-page/alert-to-care-home-page.component';
import { IcuAuthenticationComponent } from './ICUSetUp/icu-authentication/icu-authentication.component';
import { IcuSetUpHomePageComponent } from './ICUSetUp/icu-set-up-home-page/icu-set-up-home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllIcusDetailsComponent } from './ICUSetUp/all-icus-details/all-icus-details.component';
import { RegisterIcuDetailsComponent } from './ICUSetUp/register-icu-details/register-icu-details.component';
import { DeleteIcuDetailsComponent } from './ICUSetUp/delete-icu-details/delete-icu-details.component';
import { UpdateIcuDetailsComponent } from './ICUSetUp/update-icu-details/update-icu-details.component';

//connect to api
import { ConnectToIcuControllerService} from './IcuServices/connect-to-icu-controller.service';
import { HttpClientModule } from '@angular/common/http';
import { GetSingleIcuDetailsComponent } from './ICUSetUP/get-single-icu-details/get-single-icu-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertToCareHomePageComponent,
    IcuAuthenticationComponent,
    IcuSetUpHomePageComponent,
    NotFoundComponent,
    AllIcusDetailsComponent,
    RegisterIcuDetailsComponent,
    DeleteIcuDetailsComponent,
    UpdateIcuDetailsComponent,
    GetSingleIcuDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ConnectToIcuControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
