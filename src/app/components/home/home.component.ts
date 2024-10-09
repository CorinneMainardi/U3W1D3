import { Component } from '@angular/core';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('errore nella richiesta');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  }
}
