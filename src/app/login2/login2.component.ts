import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  origBodyClass = '';

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: ['doggy.huang@gmail.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required]],
      isRemember: [true, [Validators.required]]
    });

  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }

  doSubmit() {
    if (this.form.valid) {
      // TODO
    }
  }
}
