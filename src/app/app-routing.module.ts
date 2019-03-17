import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      {
        path: 'add-quote',
        component: AddQuoteComponent
      },
      {
        path: 'quotes',
        component: QuotesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
