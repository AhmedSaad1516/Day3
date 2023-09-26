import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
 @Input()  data:any[]=[]
   @Output()     send= new EventEmitter
constructor(){

}
  filter(event:any){
   this.send.emit(event)
  }
}
