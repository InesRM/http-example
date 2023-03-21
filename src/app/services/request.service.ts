import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '.././interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // con http client a diferencia de fetch, no recibirmos una promesa sino un observable
  constructor(
    private http: HttpClient
  ) { }
//con http headers añadir cabeceras a la petición
  getPost() {
    const header= new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {headers: header})
  }

  createPost(post: Post, token: string) {
    const header= new HttpHeaders({
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post); {

    }
  }

  updatePost(post: Post) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post['id']}`, post);
  }

  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
