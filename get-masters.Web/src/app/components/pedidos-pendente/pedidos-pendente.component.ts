import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IPedidosPendentes } from 'src/app/interfaces/IPedidosPendentes';

const DATA_MOCK: IPedidosPendentes[] = [
  { customerName: 'Igor', date: '05/08/2019', category: 'Construção', subCategory: 'Reforma' },
  { customerName: 'Igor', date: '05/08/2019', category: 'Construção', subCategory: 'Reforma' },
  { customerName: 'Igor', date: '05/08/2019', category: 'Construção', subCategory: 'Reforma' },
  { customerName: 'Igor', date: '05/08/2019', category: 'Construção', subCategory: 'Reforma' },
]

@Component({
  selector: 'pedidos-pendente',
  templateUrl: './pedidos-pendente.component.html',
  styleUrls: ['./pedidos-pendente.component.scss']
})
export class PedidosPendenteComponent implements OnInit {

  columns: string[] = ['Nome', 'Data', 'Categoria', 'SubCategoria']
  dataSource: MatTableDataSource<IPedidosPendentes> = new MatTableDataSource<IPedidosPendentes>(DATA_MOCK);

  constructor() { }

  ngOnInit() {
  }

}
