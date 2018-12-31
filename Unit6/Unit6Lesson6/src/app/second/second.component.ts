import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      console.log(param);
    });
    route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
    });
  }

  ngOnInit() {
  }

}
