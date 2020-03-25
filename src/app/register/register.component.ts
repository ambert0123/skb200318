import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator';

function ValidateSSID(control: AbstractControl) {
  if (isNationalIdentificationNumberValid(control.value)) {
    return null;
  } else {
    return {
      ssid: '請輸入正確的身分證字號'
    };
  }
}


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
      ssid: ['', [Validators.required, ValidateSSID]],
      addresses: this.fb.array([
      ])
    });

    this.getData().subscribe(result => {

      // this.form.setValue(result);

      // this.form.patchValue(result);

      const len = result.addresses.length;
      result.addresses.forEach(str => {
        (this.form.get('addresses') as FormArray).push(this.fb.control('', []));
      });

      delete result.password;
      delete result.confirmpw;
      this.form.reset(result);
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

  getData() {
    return of({
      firstName: 'Tesla',
      lastName: 'Lin',
      email: 'example@example.com',
      password: '1234',
      confirmpw: '1234',
      // abc: '',
      addresses: [
        'Taipei',
        'Shanghai',
        'Shanghai',
        'Shanghai',
        'Hong Kong'
      ]
    });
  }

}
