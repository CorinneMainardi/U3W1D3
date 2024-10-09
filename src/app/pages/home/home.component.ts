import { Component, OnInit } from '@angular/core';
import { iJSONresponse, iPost } from '../../Modules/i-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  featuredPost!: iPost; //post in evidenza
  postArr: iPost[] = []; //tutti post
  ngOnInit(): void {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return <Promise<iJSONresponse>>res.json();
        } else {
          throw new Error('errore nella richiesta');
        }
      })
      .then((res) => {
        res.posts.forEach((post) => {
          if (post.active) {
            this.featuredPost = post;
          } else {
            const shuffle = (array: iPost[]) => {
              for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
            };
            this.postArr.push(post);
            this.postArr = shuffle(this.postArr);
            this.postArr = this.postArr.slice(0, 4);
          }
        });
      })
      .catch((error) => {
        // Gestione degli errori
        console.error('Si è verificato un errore:', error);
      });
  }
}
