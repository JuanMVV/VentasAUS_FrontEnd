import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable, Unsubscribable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css'],
})
export class BlogpostListComponent implements OnInit {
  blogPosts$?: Observable<BlogPost[]>;
  //creamos el contrucctor para poder injectar el servicio (que se conecta a la db) en los metodos
  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    //aca llamamos al servicio que me traiga todos los blogs
    //como es solo un get, usamos el pipe que susbsicrive y unsuscribe por nosotros
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }
}
