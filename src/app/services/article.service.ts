import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl:string = "https://localhost:44387/api/articles";
  public loading:boolean = true;
  constructor(private httpCilent:HttpClient) {  }

  getArticles(page:Number,pageSize:number) {

    let api = `${this.apiUrl}/${page}/${pageSize}`;
    
    return this.httpCilent.get<ArticlePg>(api).pipe(tap(x=>{
      this.loading = false;
    }));
  }
}
