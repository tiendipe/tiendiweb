import { Component, OnInit } from '@angular/core';

interface Doc{
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  Docs: Doc[] = [
    {
      name: 'DNI'
    },
    {
      name: 'CURP'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
