import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PocService {

  _apiPath: string = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  getMailLogs(): Observable<APIResponse> {
    const url: string = this._apiPath + "GetMailLogs";
    return (this.http.get<APIResponse>(url,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ));
  }

  getMailBody(MailLogID: number): Observable<string> {
    const url: string = this._apiPath + "GetMailBody?MailLogID=" + MailLogID;
    //  return(this.http.get(url,{responseType:'text'}));
    return(this.http.get<string>(url));

  }

}

