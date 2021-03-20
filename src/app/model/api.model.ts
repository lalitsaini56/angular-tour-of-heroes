export class APIResponse {
    Data: any;
    NoOfRecords: number;
    ResponseCode: number;
  }
  
  export class SaveExceptionEmployeeModel {
    empID: string;
    CTPushID: string;
    status: boolean;
    isNew: boolean;
    remarks: string;
  }
  
  export class OJPLoginResponse {
    CTPushID: number;
    token: string;
    StatusCode: number;
    EmpID: string;
  }
  
  export class OJPAPIRemarkResponse {
    Data: any;
    UserName: string;
    ResponseCode: number;
  }
  
  export class MailLog{
    RID: number;
    MailTo: string;
    Subject: string;
    MailSentDate: string
  }
  
  export class ConfigData{
    SysConfig:any;
    UserConfig: configUserInfo;
  }
  
  
  export class configUserInfo{
    DashBoardReport: any;
    MenuReport: any;
    UserInfo: ConfigUserInfoData;
    UserPerm;any;
    userPref:any
  }
  
  export class ConfigUserInfoData{
    AdminAccess:string;
  CanReffer: boolean
  Currency: string;
  CurrencyID: number;
  DateFormat: string;
  Duration: string;
  DurationID: number;
  EmailID: string;
  EmpID: string;
  EmployerID: string;
  IsAdmin: boolean
  IsCDFCompleted: number;
  IsCDFVerified: number;
  IsOfferMade: number;
  IsProfileCompleted: boolean
  LastLogin: string;
  MQTTStatus: any
  ManagerID: number
  MobileNo: string;
  OfferID: number;
  PasswordTemplateID: number;
  RID: number;
  ReqResId: number;
  SourceInfo: string;
  Team: string;
  TimeZone: string;
  UserName: string;
  }
  
  