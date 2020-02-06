import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMenu = true;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {

  }

  productNavigation() {
    this.router.navigateByUrl('produtos')
  }


  categoryNavigation() {
    this.router.navigateByUrl('categorias')
  }
}
