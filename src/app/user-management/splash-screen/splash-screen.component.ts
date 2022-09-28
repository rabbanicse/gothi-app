import { AfterViewInit, Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit, AfterViewInit {


  constructor(private router: Router) {
  }
  ngAfterViewInit(): void {
    this.waitOnSplashScreen();
  }

  ngOnInit() {
    
  }

  waitOnSplashScreen() {
    setTimeout(() => {
      this.router.navigate(['/user/login']);
    }, 3000);
  }
}
