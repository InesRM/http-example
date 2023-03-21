import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit():void {
   console.log('inicio del proyecto')
    this.getPosts();
  }


getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>console.log(response));
  // .then(res => res.json())
  // .then(data => console.log(data))

}

}
