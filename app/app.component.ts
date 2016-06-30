import { Component } from '@angular/core';
import { ResultsComponent } from './app.results';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: '<div class="container"> <h2>Search</h2><input  class="form_control" type="text"/><a [routerLink]="[Results]" (click)="onSearch()" class="btn">Search</a></div>'
})

@RouteConfig([
  {
    path: '/home',
    name: 'home',
    component: AppComponent, 
    useAsDefault: true
  }, 
  {
    path: '/results',
    name: 'Results',
    component: ResultsComponent
    
  }
])

export class AppComponent { 
    searchMessage = "";
    onSearch(){
        this.searchMessage = "Searching...";
        
        //$location.url("./");
    }
}