import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Model } from '../interfaces/data.model';
import { data } from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {

  getAllProducts(): Observable<Model[]> {
    return of(data);
  }

  getProductById(id: number): Observable<Model>{
    return this.getAllProducts().pipe(map(products => products.find(product => product.id === id)));
  }

  addToData(newProduct: any): void {
    data.push(newProduct);
  }
}
 