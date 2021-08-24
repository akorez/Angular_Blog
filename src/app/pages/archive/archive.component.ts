import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  totalCount: number;
  pageSize: number = 5;
  loadingItem: number = 5;
  ajax: any;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    if (this.ajax!=null) this.ajax.unsubscribe();

    this.route.paramMap.subscribe((params) => {
      this.articleService.loading = true;
      this.articles = [];
      this.totalCount = 0;
      let year = Number(params.get('year'));
      let month = Number(params.get('month'));
      if (params.get('page')) this.page = Number(params.get('page'));

      this.ajax = this.articleService
        .getArticleArchiveList(year, month, this.page, this.pageSize)
        .subscribe((data) => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
          this.articleService.loading = false;
        });
    });
  }
}
