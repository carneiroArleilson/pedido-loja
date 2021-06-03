import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vendedoraEscolhida = 0;
  vendedora = [
    {
      name: "",
      id: 0
    },
    {
      name : "aysha",
      id: 4
    },
    {
      name : "leide",
      id: 3
    },
    {
      name : "fulana",
      id: 2
    }
  ];
  operadorEscolhido = 0;
  operador = [
    {
      name: "",
      id: 0
    },
    {
      name: "atacado",
      id: 1
    },{
      name: "varejo",
      id: 2
    }
  ];

  constructor(
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['order']);
  }

}
