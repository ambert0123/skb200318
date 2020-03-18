import { Component, OnInit, AfterViewInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { chartBarDemo } from '../chartBarDemo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit {

  type = '';

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.type = param.get('type');
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      chartAreaDemo();
      chartPieDemo();
      chartBarDemo();
    }, 0);
  }

  plusOne(value: string) {
    const num = +value + 1;
    this.router.navigateByUrl('/charts/' + num);
  }
}
