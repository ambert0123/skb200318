import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  origBodyClass = '';

  data: any = {
    email: 'doggy.huang@gmail.com',
    password: '123123',
    isRemember: true
  };

  user2: any = {
    email: 'test@example.com',
    password: '123',
    isRemember: false
  };

  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.form.control.markAsDirty();
    }, 0);
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      // TODO
      alert('送出表單');
    }
  }

  doLoginGoogle(form: NgForm) {
    alert('變更送出 API 為登入 Google 帳號的 URL');
  }
}
