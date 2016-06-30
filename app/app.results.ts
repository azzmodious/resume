import { Component } from '@angular/core';
@Component({
  selector: 'my-results',
  template: '<h3>Results</h3><ul><li ng-repeat="result in results">{{result.title}}</li></ul>'
})
export class ResultsComponent {
    results = [
        {
            title: "Some Link", 
            url: "Some Other Link"
        },
        {
            title: "Some Some Link", 
            url: "Some Other Link"
        }
    ];
}