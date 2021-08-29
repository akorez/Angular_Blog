import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css'],
})
export class ListCommentComponent implements OnInit {
  comments: Comment[] = [];
  loading: boolean;
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading=true;
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.commentService.commentList(id).subscribe(data=>{
      this.comments = data;
      this.loading=false;
    });
  }
}
