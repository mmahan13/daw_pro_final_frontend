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
      name:"Mike",
      cif:"A53897898",
      address:"Av Camilo Jose Cela 22",
      email:"mike@example.com",
      telephone:"918664364",
    },
    {
      name:"Alex",
      cif:"A369898564",
      address:"Plaza de la Coronación 1",
      email:"alex@example.com",
      telephone:"91966897",
    },
    {
      name:"Sofía",
      cif:"A23698745",
      address:"Av Camilo Jose Cela 22",
      email:"sofi@example.com",
      telephone:"911234586",
    }];
  }

}
