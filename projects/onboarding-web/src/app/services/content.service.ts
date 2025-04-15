// projects/onboarding-web/src/app/services/content.service.ts
import { Injectable } from '@angular/core';
import { Content } from 'onboarding-common/lib/models/content.model';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContentService {
  getContent(): Observable<Content[]> {
    const contenidos: Content[] = [
      { id: 1, title: 'Inicio', body: 'Bienvenido a nuestra web!' },
      { id: 2, title: 'Sobre nosotros', body: 'Conoce más sobre nuestra empresa.' }
    ];
    return of(contenidos);
  }
}
