import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  public Editor = DecoupledEditor;
  fileData: File;
  picture: string = "";
  articleForm: FormGroup;
  success: boolean;
  loading: boolean = true;
  info: string;
  categories: Category[] = [];
  articleId:number;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myValidationService: MyvalidationService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.articleId = Number(this.route.snapshot.paramMap.get("id"));
    this.articleService.getArticle(this.articleId).subscribe(data=>{
      this.picture = data.picture;
      this.getControls.title.setValue(data.title);
      this.getControls.contentSummary.setValue(data.contentSummary);
      this.getControls.contentMain.setValue(data.contentMain);
      this.getControls.category.setValue(data.category);
      this.loading = false;
    });

    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      contentSummary: new FormControl('', Validators.required),
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

  getCategory() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  displayCategoryName(category: Category) {
    return category.name;
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

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.updateArticle(this.articleId,this.articleForm.value).subscribe(
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

}
