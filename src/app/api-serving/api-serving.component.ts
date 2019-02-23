import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-api-serving',
  templateUrl: './api-serving.component.html',
  styleUrls: ['./api-serving.component.css']
})
export class ApiServingComponent implements OnInit {

  constructor(private _GlobalService: GlobalService) { }

  posts: any = [];
  urli = 'https://jsonplaceholder.typicode.com/posts';
  ngOnInit(): void {

    this._GlobalService.getPosts().subscribe(Response => {
      this.posts = Response;
    } );
  }

  creatPost( inp: any , bodyInput: any ) {
    const post = {title: inp , body : bodyInput};
    this._GlobalService.creatP(post).subscribe(res => {
      this.posts.splice(0, 0, post);
    });
  }

  updatePost( post , inputTitle  , bodyInput) {
    if ( inputTitle && bodyInput) {
      const updatPost = {title: inputTitle , body: bodyInput , id: post.id};
      const postIid: number = post.id;
      console.log(updatPost);

      this._GlobalService.updateP( postIid, updatPost).subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts[index] = updatPost;
      });
    }
  }

  deletePost( post) {
    const deletPost = {id : post.id};

    this._GlobalService.deleteP(post.id).subscribe(res => {
      const indx = this.posts.indexOf(post);
      this.posts.splice(indx , 1);
      console.log(indx);
    });
  }
}
