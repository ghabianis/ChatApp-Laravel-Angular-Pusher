import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
     baseUrl ='http://127.0.0.1:8000/api'
  constructor(private HttpClient:HttpClient) { }


  message(data:any){
    return this.HttpClient.post(`${this.baseUrl}/message`,data);
  }


}
