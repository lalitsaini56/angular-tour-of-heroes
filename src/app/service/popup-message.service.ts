import { Injectable } from '@angular/core';

declare var swal;
@Injectable({
  providedIn: 'root'
})

export class PopupMessageService {

  constructor() { }

  DisplayPopMessage(title: string, message: string, messageType: MessageType) {
    console.log(title + message + messageType)
    swal(title, message, messageType);
  }

  DisplayPopWithoutConfirmation(title, message, messageType) {
    swal({
      html: true,
      title: title,
      text: message,
      type: messageType,
      showConfirmButton: false
    })
  }
}

export enum MessageType {
  success = "success",
  alert = "info",
  error = "error"
}

