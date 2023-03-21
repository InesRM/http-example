import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private requestService: RequestService
  ) { }


  ngOnInit():void {
   console.log('inicio del proyecto')
    // this.getPosts();
    // this.createPost();
    // this.deletePost();
  }


getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>response.json())
  .then ((json)=>console.log (json));

  // .then(res => res.json())
  // .then(data => console.log(data))

}

createPost() {
  const newPost = {
    title: 'mi nuevo post',
    body: 'cuerpo del post',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(
      {
        title: 'mi nuevo post',
        body: 'cuerpo del post',
        userId: 1
      }
      ),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => console.log(json));

}

getAllPosts() {
  this.requestService.getPost()
  .subscribe((response) => {
    console.log(response);
  })

}

createNewPost() {
 let post= {
    title: 'mi nuevo post',
    body: 'cuerpo del post',
    userId: 1
 }
 //todo: añadir token
 let token= 'Este será el token de mi usuario';
  this.requestService.createPost(post, token).subscribe((response) => {
    console.log(response);
  })

  error: (error: any) => {
    console.log(error);
  }
}

updatePost() {
  let post= {
     title: 'mi nuevo post',
     body: 'cuerpo del post',
     userId: 4,
     id: 1
  }
   this.requestService.updatePost(post).subscribe((response) => {
     console.log(response);
   })

   error: (error: any) => {
     console.log(error);
   }
 }

  deletePostAngular() {
    let post={
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      message: "Post deleted"
    }
    this.requestService.deletePost(1).subscribe((response) => {
      console.log(response);
    })

    error: (error: any) => {
      console.log(error);
    }
  }
}
