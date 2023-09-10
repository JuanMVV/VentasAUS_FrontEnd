export interface AddBlogPost {
    title: string;
    shortDescription: string;
    content: string;
    featuredImage: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
}