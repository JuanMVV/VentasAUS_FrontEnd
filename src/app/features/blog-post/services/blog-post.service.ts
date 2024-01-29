import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  createBlogPost(data: AddBlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(
      'https://localhost:7296/api/blogposts',
      data
    );
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('https://localhost:7296/api/blogposts');
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `https://localhost:7296/api/blogposts/${id}`
    );
  }


  //creamos el servicio para poder llamar por el urlhandle y no el id
  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `https://localhost:7296/api/blogposts/${urlHandle}`
    );
  }






  //creamos un nuevo servicio para las ediciones
  updateBlogPost(
    id: string,
    updatedBlogPost: UpdateBlogPost
  ): Observable<BlogPost> {
    return this.http.put<BlogPost>(
      `https://localhost:7296/api/blogposts/${id}`,
      updatedBlogPost
    );
  }

  deleteBlogPost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(
      `https://localhost:7296/api/blogposts/${id}`
    );
  }

  //(`https://localhost:7296/api/categories/${id}`);
}
