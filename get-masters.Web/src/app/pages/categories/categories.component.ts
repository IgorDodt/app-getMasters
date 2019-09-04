import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { MatTableDataSource } from '@angular/material';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  columns: string[] = ['Nome', 'Descrição']
  dataSource: MatTableDataSource<ICategory>;

  constructor(private categorySrv: CategoryService){}

async ngOnInit() {
    const categories = await this.categorySrv.getAll();
    this.dataSource = categories.data.map((it: ICategory)=> {
      return {
        name: it.name, description: it.description}
    });
  }
}