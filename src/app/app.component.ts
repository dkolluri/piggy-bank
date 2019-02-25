import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pay-calculator';
  constructor(private route: ActivatedRoute,
    private router: Router){}
  // onButtonClick() {
  //  	console.log('here');
  //  	this.router.navigate(['/calculate',2]);

  //  }
}
