import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogImage } from '../../models/blog-image.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  //creamos una variable global observable para poder llamarla desde otros components
  selectedImage: BehaviorSubject<BlogImage> = new BehaviorSubject<BlogImage>({
    id: '',
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: '',
  });

  constructor(private http: HttpClient) {}

  getAllImages(): Observable<BlogImage[]> {
    return this.http.get<BlogImage[]>('https://localhost:7296/api/images');
  }

  uploadImage(
    file: File,
    fileName: string,
    title: string
  ): Observable<BlogImage> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);

    return this.http.post<BlogImage>(
      'https://localhost:7296/api/images',
      formData
    );
  }

  selectImage(image: BlogImage): void {
    this.selectedImage.next(image);
  }

  //esta es la funcion q debemos llamar desde los componentes
  onSelectImage(): Observable<BlogImage> {
    return this.selectedImage.asObservable();
  }
}
