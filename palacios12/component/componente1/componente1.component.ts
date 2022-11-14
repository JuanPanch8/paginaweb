import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private got:Router) { }

  ngOnInit(): void {
  }
  
  navegacion(){
    this.got.navigate(['web2'])
  }

}
