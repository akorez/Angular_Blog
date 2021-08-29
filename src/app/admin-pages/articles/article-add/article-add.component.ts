import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { Router } from '@angular/router';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css'],
})
export class ArticleAddComponent implements OnInit {
  public Editor = DecoupledEditor;
  fileData: File;
  picture: string = "";
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string;
  categories: Category[] = [];
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myValidationService: MyvalidationService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.articleForm = new FormGroup({
      title: new FormControl('Makale 1', Validators.required),
      contentSummary: new FormControl('makale özet 1', Validators.required),
      contentMain: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      picture: new FormControl(''),
    });
  }

  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
  get getControls() {
    return this.articleForm.controls;
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.addArticle(this.articleForm.value).subscribe(
        (data) => {
          this.router.navigateByUrl("admin/makale/liste");
          this.success = true;
          this.loading = false;
        },
        (error) => {
          this.success = false;
          this.info = 'Bir hata meydana geldi!';
        }
      );
    }
  }

  displayCategoryName(category: Category) {
    return category.name;
  }
  getCategory() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  upload(files: any) {
    this.fileData = files.target.files[0];
    let formData = new FormData();
    formData.append('picture', this.fileData);
    this.articleService.saveArticlePicture(formData).subscribe((data) => {
      console.log(data.path);
      this.picture = data.path;
      this.articleForm.controls.picture.setValue(this.picture);
    });
  }
}
