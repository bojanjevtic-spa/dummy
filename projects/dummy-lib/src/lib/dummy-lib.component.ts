import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dummyLib',
  template: `
    <p>
      dummy-lib works!
    </p>
  `,
  styles: [
  ]
})
export class DummyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
