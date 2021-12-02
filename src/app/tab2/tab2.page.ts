import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public products:any= [];
  constructor() {}

  ngOnInit(){
    this.products = [{
      name:"Miel de brezo 1kg",
      ref:"MB123654",
      tipo_iva:"21%",
      price:6.50,
    },
    {
      name:"Miel de brezo 1/2kg",
      ref:"MB332154",
      tipo_iva:"21%",
      price:3.50
    },
    {
      name:"Caja miel de brezo 12kg",
      ref:"CMB123654",
      tipo_iva:"21%",
      price:78.00,
    }];
  }

}
