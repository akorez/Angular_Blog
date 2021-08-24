import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string = 'https://localhost:44387/api/helper';
  public loading: boolean = true;
  constructor(private httpClient: HttpClient) {}

  sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}
