import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  origBodyClass = '';

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      firstName: ['Will', [Validators.required]],
      lastName: ['Huang', [Validators.required]],
      email: ['doggy.huang@gmail.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required]],
      confirmpw: ['123', [Validators.required]],
      addresses: this.fb.array([
        this.fb.control('ADD1', []),
        this.fb.control('ADD2', [])
      ])
    });
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }


}
