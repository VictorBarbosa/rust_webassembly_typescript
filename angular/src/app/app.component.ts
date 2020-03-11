import { Component } from '@angular/core';

// import { sumValues } from 'src/web-assembly/fromts';

declare var Module: any;
// declare const Module: any;
// declare var wasm
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';


  constructor() {

    import('src/web-assembly/rustassembly/rust_webassembly').then((response) => {

      console.time();
      for (let index = 0; index < 500000; index++) { }
      console.timeEnd();
      console.log('-------------------------------------------')

      console.time();
      var r = response.add_one(0, 500000)
      console.timeEnd();
    });
  }
}


