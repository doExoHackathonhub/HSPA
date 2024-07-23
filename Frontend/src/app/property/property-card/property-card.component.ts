import { Component } from "@angular/core";



@Component({
    selector:'app-property-card',
    //template:`<h1>I am a card</h1>`,
    templateUrl:`property-card.component.html`,
    //styles:['h1 {font-weight:normal;}']
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
   property: any={
     "id":1,
     "name":"Birla House",
     "type":"House",
     "price":12000
   }
}