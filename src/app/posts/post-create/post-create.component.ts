import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  title = 'Mean Stack';
  newPost = 'No Content';
  enteredValue = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    // console.dir(postInput);
    this.newPost = this.enteredValue;
  }
}
