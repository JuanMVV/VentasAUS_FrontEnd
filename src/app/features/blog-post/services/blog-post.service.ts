import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  //(`https://localhost:7296/api/categories/${id}`);
}
