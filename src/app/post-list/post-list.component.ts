import { Component , Input } from '@angular/core';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is first post\'s content'},
  //   {title: 'Second Post', content: 'This is second post\'s content'},
  //   {title: 'Third Post', content: 'This is Third post\'s content'},
  //   {title: 'Fourth Post', content: 'This is Fourth post\'s content'},
  //   {title: 'Fifth Post', content: 'This is Fifth post\'s content'}
  // ];
  @Input() posts: Post[] = [];

}
