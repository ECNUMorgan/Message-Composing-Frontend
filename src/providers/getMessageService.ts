import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
@Injectable()
export class GetMessageService {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/getMessage';
  public responsemessage;
  constructor(public http: Http) {
  }

  getMessage(): Observable<any> {
    console.log("getmessage.")
    return this.http.get(this.API + '/getMessage');
  }

  get(id: string) {
    return this.http.get(this.BEER_API + '/' + id);
  }

  sendMessage(message: any): string {
    const url = this.API + '/' + 'receiveMessage';
    const headers = new Headers({ 'Aceept': 'application/json', 'Content-Type' : 'application/x-www-form-urlencoded' });
    const options = new RequestOptions( { headers:headers } );
   this.http.post(url, `message=${message}`,options)
   .subscribe( (response : Response) => {
    console.log(response);
    this.responsemessage=response;
    return response;
}
  )
  console.log(this.responsemessage);
    return this.responsemessage;
  }

  remove(id: string) {
    return this.http.delete(this.BEER_API + '/' + id);
  }
}
