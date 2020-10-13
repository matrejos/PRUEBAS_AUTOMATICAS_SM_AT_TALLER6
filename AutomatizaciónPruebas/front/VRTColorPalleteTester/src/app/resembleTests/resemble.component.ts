import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resemble',
  templateUrl: 'resembleDashboard.html'
})
export class ResembleComponent implements OnInit {

  tests:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getResembleJSTest();
  }

  getResembleJSTest() {
    this.tests = [];
    this.rest.getResembleJSTest().subscribe((data: {}) => {
      console.log(data);
      this.tests = data;
    });
  }

  runTest() {
    this.rest.postResembleJSTest().subscribe((result) => {
      console.log(result);
    }, 
    (err) => {
      console.log(err);
    });
  }
}