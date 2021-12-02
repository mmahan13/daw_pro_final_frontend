import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public orderHeader:any = []

  constructor() {}

  ngOnInit(){
     this.orderHeader = [{
      name:"Frutos secos Yoli",
      number_orders:"1",
      created_at:"21/11/2021",
      updated_at:"02/12/2021",
    },
    {
      name:"Sabor a Miel",
      number_orders:"2",
      created_at:"21/11/2021",
      updated_at:"02/12/2021",
    },
    {
      name:"Natural food",
      number_orders:"3",
      created_at:"21/11/2021",
      updated_at:"02/12/2021",
    }];
  }
  

}
