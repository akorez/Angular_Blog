import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})

export class MenuCategoryComponent implements OnInit {

  categories:Category[] = [];
  constructor(private categoryService:CategoryService) {

  }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })


  }

}
