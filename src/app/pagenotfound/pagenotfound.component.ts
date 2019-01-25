import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'page-not-found',
  templateUrl: './pagenotfound.component.html'
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
    console.log('url atual', document.location.href);
    console.log('location', location.href);
    // window.open("https://www.google.com/");
  }

  voltar() {
    this.location.back();
  }

}
