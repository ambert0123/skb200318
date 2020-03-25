import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

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
        this.fb.control('', []),
        this.fb.control('', [])
      ])
    });
  }

  addNewAddress() {
    const arr = this.form.get('addresses') as FormArray;
    arr.push(this.fb.control('', []));
  }

  removeAddress(i: number) {
    (this.form.get('addresses') as FormArray).removeAt(i);
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }

}
