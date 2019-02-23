import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  posts: any = [];
  urli = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _HttpClient: HttpClient) { }

  getPosts() {
    return this._HttpClient.get(this.urli);
  }

  creatP(post) {
    return this._HttpClient.post(this.urli, JSON.stringify(post));
  }


  updateP( postIid , updatPost) {
      return this._HttpClient.put(this.urli + '/' + postIid, updatPost);
      }

  deleteP(post) {

    return this._HttpClient.delete(this.urli + '/' + post.id);
  }

}
