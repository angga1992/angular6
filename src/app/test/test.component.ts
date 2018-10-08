import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector can read as class with -> .'app-test'
  // selector can read as class with -> '[app-test]'
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>inline template</div>',
  template: `<div>
                inline template
             </div>`,
  // styleUrls: ['./test.component.css']
  styles: [`
          div {
            color: red;
          }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
