import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import { tap } from 'rxjs/operators';
import { Article } from '../models/article';
import { Archive } from '../models/archive';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl: string = 'https://localhost:44387/api/articles';
  public loading: boolean = true;
  constructor(private httpCilent: HttpClient) {}

  getArticles(page: Number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpCilent.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getArticle(id: number) {
    let api = `${this.apiUrl}/${id}`;
    return this.httpCilent.get<Article>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getArticleWithCategory(categoryId: number, page: number, pageSize: number) {
    let api = `${this.apiUrl}/GetArticlesWithCategory/${categoryId}/${page}/${pageSize}`;
    console.log(api);
    return this.httpCilent.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getSearchArticles(searchText: string, page: number, pageSize: number) {
    let api = `${this.apiUrl}/GetSearchArticle/${searchText}/${page}/${pageSize}`;
    return this.httpCilent.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getArticlesByMostView() {
    let api = `${this.apiUrl}/GetArticlesByMostView`;
    return this.httpCilent.get<Article []>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getArticlesArchive(){
    let api = `${this.apiUrl}/getArticlesArchive`;
    return this.httpCilent.get<Archive []>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  getArticleArchiveList(year:number,month:number,page:number,pageSize:number){
    let api = `${this.apiUrl}/getArticleArchiveList/${year}/${month}/${page}/${pageSize}`;
    return this.httpCilent.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  articleViewCountUp(id:number) {
    let api = `${this.apiUrl}/articleViewCountUp/${id}`;
    return this.httpCilent.get(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
