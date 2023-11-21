import { CharactersService } from './../characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {


  character: any[] = [];

  //injeção de dependência da camada de serviço
  constructor(private service: CharactersService) { 

  }
  ngOnInit(): void {
    this.service.listarCharacters().subscribe((data: any) => {
      this.character = data;
    });
  }


}
