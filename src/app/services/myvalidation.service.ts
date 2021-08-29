import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyvalidationService {

  constructor() { }

  getValidationMessages(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errorName in f.errors) {
        switch (errorName) {
          case 'required':
            return `${name} alanı boş bırakılamaz`;
            break;
          case 'email':
            return 'email formatı yanlış';
            break;
          case 'minlength':
            return `${name} alanı en az 5 karakter olmalıdır`;
            break;

          default:
            break;
        }
      }
    }
  }

}
