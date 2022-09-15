import { Component, Input, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imovel';

@Component({
  selector: 'app-card-imovel',
  templateUrl: './card-imovel.component.html',
  styleUrls: ['./card-imovel.component.css']
})
export class CardImovelComponent implements OnInit {

  @Input() imoveis?: Imovel[];

  constructor() { }

  ngOnInit(): void {
  }

}
