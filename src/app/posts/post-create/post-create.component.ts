import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  title = 'Mean Stack';
  newPost = 'No Content';

  onAddPost() {
    this.newPost = 'This user\'s new post';
  }
}
