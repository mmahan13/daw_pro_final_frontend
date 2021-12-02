import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public clients:any = []

  constructor() {}

  ngOnInit(){
    this.clients = [{
      name:"Frutos secos Yoli",
      cif:"A53897898",
      address:"Av Camilo Jose Cela 22",
      email:"frutossyoly@example.com",
      telephone:"918664364",
    },
    {
      name:"Sabor a Miel",
      cif:"A369898564",
      address:"Plaza de la Coronación 1",
      email:"saboramiel@example.com",
      telephone:"91966897",
    },
    {
      name:"Natural food",
      cif:"A23698745",
      address:"Av Camilo Jose Cela 22",
      email:"naturalfood@example.com",
      telephone:"911234586",
    }];
  }

}
