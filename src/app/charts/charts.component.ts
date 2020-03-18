import { Component, OnInit, AfterViewInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { chartBarDemo } from '../chartBarDemo';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';

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
      if (param.get('type')) {
        this.type = param.get('type');
      }
    });

    this.route.queryParamMap.subscribe(param => {
      if (param.get('type')) {
        this.type = param.get('type');
      }
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

  plusOneQuery(value: string) {
    const num = +value + 1;

    // this.router.navigateByUrl('/charts?type=' + num);

    const navExtra = Object.assign(environment.navExtras, {
      queryParams: {
        type: num
      }
    });

    this.router.navigate(['/charts'], navExtra);
  }
}
