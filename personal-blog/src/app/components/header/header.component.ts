import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller,
    private router: Router
    ) {
    
  }

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goSobreMi() {
    this.scroller.scrollToAnchor("aca");
  }

  goExperiencia() {
    this.scroller.scrollToAnchor("alla");
  }
}
