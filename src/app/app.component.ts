import { Component, VERSION, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
// @ViewChild(ChildComponent) jakasZmienna;

// doPokazania: any;
//   ngAfterViewInit(){
//     this.doPokazania = this.jakasZmienna.message

//   }


message:string = '';
receiveMessage($event){
  this.message = $event;
}
}
