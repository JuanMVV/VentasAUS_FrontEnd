import { Category } from '../../category/models/category.model';

export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandle: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
  //agregamos la relacion de muchas categorias
  categories: Category[];
}
