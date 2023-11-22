import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FlightsSearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FlightsSearchComponent, pathMatch: 'full' },  //index page (home page)
      // { path: 'counter', component: CounterComponent }, // would write /counter in the url to get to this page  (localhost:4200/counter)  
      // { path: 'fetch-data', component: FetchDataComponent }, // url then component to specify which 'page' we want to load onto that url link
      // TODO: CAN ADD EMAIL VERICIATION PATH HERE TOO NOW!
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
