import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      console.log(param['message']);
    });
    route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
    });
  }

  ngOnInit() {
  }

}
