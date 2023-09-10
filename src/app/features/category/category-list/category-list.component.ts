import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  //lo usamos antas para sin promesas
  //categories?: Category[];

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService){
  }


  //Vieja manera de llamar al servicio sin promesas
  // ngOnInit(): void {
  //   this.categoryService.getAllCategories()
  //   .subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     }
  //   });
  // }

    ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    }

}
