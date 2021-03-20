import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupMessageService, MessageType } from '../service/popup-message.service';
import { CommonService, ResponseCode } from '../service/common.service';
import { EncryptionService } from '../service/encryption.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
    private CommonService: CommonService,
    private popUp: PopupMessageService,
    private Encryption: EncryptionService) { }

  ngOnInit(): void {
  }
  IsShowLoader: boolean = false;
  OnSubmit(username: string, password: string) {
    if (username == '' || password == '') {
      this.popUp.DisplayPopMessage('Login', 'please enter username and Password', MessageType.alert);
      return;
    }
    // console.log(this.Encryption.Enc(username));
    this.IsShowLoader = true;
    var item = this.CommonService.OJPEmployeeExceptionLogin(username, password).subscribe(res => {
      console.log(res);
      debugger;
      if (res.StatusCode == ResponseCode.Success) {
        sessionStorage.setItem('CTPushID', res.CTPushID.toString());
        sessionStorage.setItem('Token', res.token);
        this.router.navigate(['/dashboard']);
      }

      else if (res.StatusCode == ResponseCode.NoRecordFound)
        this.popUp.DisplayPopMessage('Alert', 'Invalid username or Password', MessageType.alert);

      else if (res.StatusCode == ResponseCode.NoRecordFound)
        this.popUp.DisplayPopMessage('Alert', 'Invalid username', MessageType.alert);

      else
        this.popUp.DisplayPopMessage('Error', 'Server Error! please try again later', MessageType.error);

      this.IsShowLoader = false;
    }, error => {
      this.popUp.DisplayPopMessage('Error', 'Server Error! please try again later', MessageType.error);
      this.IsShowLoader = false;
      return;
    })
  }
}
