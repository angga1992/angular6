import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector can read as class with -> .'app-test'
  // selector can read as class with -> '[app-test]'
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>inline template</div>',
  template: `
              <h2 [style.color]="'orange'"> this style </h2>
              <h2 [style.color]="hasError ? 'red' : 'green'"> this style </h2>
              <h2 [style.color]="highlightcolor"> this style </h2>
              <h2 [ngStyle]="titleStyle"> this style </h2>

              <h2 class="text-success"> this class </h2>
              <h2 [class]="textSuccess"> this class </h2>
              <h2 [class.text-danger]="hasError"> this class </h2>
              <h2 [ngClass]="messages"> this class </h2>

              <h2>{{ name + "angga" }}</h2><br>
              <h2>{{ 2 + 2 + "angga" }}</h2>
              <h2>{{ coba() }}</h2>
              <h2>{{ coba().toUpperCase() }}</h2>
              <div>
                inline template
              </div>
              <input type="text" value="angga">&nbsp; 
              <input disabled type="text" value="angga">

             `,
  // styleUrls: ['./test.component.css']
  styles: [`
          div {
            color: red;
          }
          .text-success {
            color: green;
          }
          .text-danger {
            color: red;
          }
          .text-special {
            font-style: italic;
          }
  `]
})
export class TestComponent implements OnInit {
  public highlightcolor = "orange"
  public textSuccess = "text-success";
  public hasError = true;
  public isSpecial = true;
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  public messages = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public name = "Angga ";
  constructor() { }

  ngOnInit() {
  }
  coba(){
    return "coba aja " + this.name;
  }
}
