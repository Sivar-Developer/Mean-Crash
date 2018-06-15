import { PostsService } from './../posts/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts/post.model';
import { subscribtion } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is first post\'s content'},
  //   {title: 'Second Post', content: 'This is second post\'s content'},
  //   {title: 'Third Post', content: 'This is Third post\'s content'},
  //   {title: 'Fourth Post', content: 'This is Fourth post\'s content'},
  //   {title: 'Fifth Post', content: 'This is Fifth post\'s content'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscribtion;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    //
  }

}
