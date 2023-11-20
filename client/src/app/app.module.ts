import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },  //index page (home page)
      { path: 'counter', component: CounterComponent }, // would write /counter in the url to get to this page  (localhost:4200/counter)  
      { path: 'fetch-data', component: FetchDataComponent }, // url then component to specify which 'page' we want to load onto that url link
      // TODO: CAN ADD EMAIL VERICIATION PATH HERE TOO NOW!
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
