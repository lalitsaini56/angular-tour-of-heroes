import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, ErrorObserver } from 'rxjs'
import { APIResponse, SaveExceptionEmployeeModel, OJPLoginResponse, OJPAPIRemarkResponse } from '../model/api.model'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { DOCUMENT } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  _apiPath: string = environment.SERVER_URL;
  _domainName: string = environment.Server_Domain;
  OJPValidateUserID(UserID: string): Observable<OJPLoginResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null)
      return (this.http.get<any>(this._apiPath + "OJPValidateUserID?UserID=" + UserID));
    else
      this.logout();
  }

  OJPEmployeeExceptionLogin(UserID: string, password: string): Observable<any> {
    let url = this._apiPath + "Login/GetLoginDetails?username=" + UserID + "&password=" + password;
    console.log(url); 
    return (this.http.get<any>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/xml'
        })
      }))
  }

  getOjpExceptionEmployees(UserID: string, PageNo: number): Observable<APIResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null) {
      const url: string = this._apiPath + "GetOJPExceptionEmployees";
      return (this.http.post<any>(url,
        {
          'UserID': UserID,
          'Page': PageNo
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Token': sessionStorage.getItem('Token')
          })
        }
      ));
    }
    else
      this.logout();
  }

  getEmployeeBasicDetails(UserID: string): Observable<APIResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null) {
      return (this.http.get<any>(this._apiPath + "OJPExceptionEmpBasic?UserID=" + UserID, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Token': sessionStorage.getItem('Token')
        })
      }))
    }
    else
      this.logout();
  }

  getOJPExceptionEmpComments(UserID: string): Observable<OJPAPIRemarkResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null) {
      return (this.http.get<any>(this._apiPath + "GetOJPExceptionEmpComments?UserID=" + UserID, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Token': sessionStorage.getItem('Token')
        })
      }));
    }
    else
      this.logout();
  }

  saveOJPExceptionEmployee(employeeData: any): Observable<APIResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null) {
      const url: string = this._apiPath + "SaveOJPExceptionEmployee";
      return (this.http.post<APIResponse>(url, employeeData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Token': sessionStorage.getItem('Token')
        })
      }
      ))
    }
    else
      this.logout();
  }


  oJPExceptionEmpBasic(): Observable<APIResponse> {
    if (localStorage.getItem('H!reCr@ft.enc_UserID') != null) {
      const url: string = this._apiPath + "OJPExceptionEmpBasic";
      return (this.http.post<any>(url,
        {
          'UserID': '',
          'Page': 1
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Token': sessionStorage.getItem('Token')
          })
        }));
    }
    else
      this.logout();
  }
  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    //this.document.location.href = this._domainName;
  }

}

export enum ResponseCode {
  Success = 100,
  Duplicate = 101,
  InvalidEmployeeID = 102,
  NoRecordFound = 103,
  Error = 104,
  InValidExcelTemplate = 105,
  UnAuthrized = 401,
  SeesionExpired = 440
}
