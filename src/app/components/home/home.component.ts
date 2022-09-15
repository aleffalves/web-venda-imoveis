import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imovel';
import { ImovelService } from 'src/app/services/imovel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imoveis ?: Imovel[];

  constructor(
    private imovelService : ImovelService
  ) { }

  ngOnInit(): void {
    this.getAllImoveis()
  }

  getAllImoveis(){
    this.imovelService.buscarTodosImoveis().subscribe(
      resposta => {
        console.log(resposta)
        this.imoveis = resposta
      }
    )
  }

}
