import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  origBodyClass = '';

  constructor() { }

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }


}
