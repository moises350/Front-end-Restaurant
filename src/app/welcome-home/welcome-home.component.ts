import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.css']
})
export class WelcomeHomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToPage(pagename:string)
  {
    this.router.navigate([pagename]);
  }

}
