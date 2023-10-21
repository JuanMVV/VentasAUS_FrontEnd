export interface UpdateBlogPost {
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandle: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
  //agregamos la relacion de muchas categorias
  categories: string[];
}
