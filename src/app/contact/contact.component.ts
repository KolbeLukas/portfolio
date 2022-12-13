import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  send: boolean = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.disable(nameField, emailField, messageField, sendButton);
    this.sendData(nameField, emailField, messageField);
    this.send = true;
    this.enable(nameField, emailField, messageField, sendButton);
    setTimeout(() => {
      this.send = false;
    }, 2000);
  }

  disable(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  async sendData(nameField: any, emailField: any, messageField: any) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email-address', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://lukas-kolbe-dev.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }


  enable(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
}
