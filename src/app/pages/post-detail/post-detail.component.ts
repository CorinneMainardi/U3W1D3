import { Component, OnInit } from '@angular/core';
import { iJSONresponse, iPost } from '../../Modules/i-post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  post!: iPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      fetch('db.json')
        .then((response) => <Promise<iJSONresponse>>response.json())
        .then((response) => {
          const arrayPosts = response.posts;

          const postDetail = arrayPosts.find((post) => post.id == params['id']);
          if (postDetail) {
            this.post = postDetail;
            console.log(this.post);
          } else {
            console.log('trimone');
          }
        });
    });
  }
}
