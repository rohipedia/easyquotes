import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { basicReducer } from './store/basics.reducer';
import { MainComponent } from './components/main/main.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteComponent } from './components/quotes/quote/quote.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    MainComponent,
    QuotesComponent,
    QuoteComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({basics: basicReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
