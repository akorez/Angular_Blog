import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string = `${environment.baseUrl}/helper`;
  public loading: boolean = true;
  constructor(private httpClient: HttpClient) {}

  sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}
