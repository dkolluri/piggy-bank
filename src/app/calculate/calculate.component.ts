import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {
  amount:string = '';
  index:number = 2;
  bookmark:string = '';
  id:number = 1;
  showNextLink:boolean;
  payRate:number = 0;
  Percentage:number = 0;
  hours:number = 0;
  payCheck:number = 0;
  label:string = '';
  userInput:number = 0;
  constructor(private route: ActivatedRoute,
    private router: Router) {}

   onButtonClick(value:string) {
	   	this.id = parseInt(this.route.snapshot.paramMap.get('id'));
	   	this.label = this.getCurrentLabel((this.id)+1);
	   	if (this.id <= 3) {
	   	 this.router.navigate(['/calculate',(this.id)+1]);	
	   	 this.showNextLink = true;
        } else {
          this.router.navigate(['']);	
        }
	   	if (this.id === 1) {
	   		this.payRate = parseInt(value);
	   	} else if (this.id === 2) {
	   		this.Percentage = parseInt(value);
	   	} else if(this.id === 3) {
	   		this.hours = parseInt(value);
	   	} else if(this.id === 4) {
            this.payCheck = parseInt(value);
	   	}
    }


	ngOnInit() {
	    this.label = 'Enter Pay Rate';
	}
    getCurrentLabel(id:number) {
	  	switch(id) {
	  		case 2: {
	  			return 'Enter Percentage';
	  			break;
	  		}
	  		case 3: {
	  			return 'Enter no of hours';
	  			break;
	  		}
	  		case 4: {
	  			return 'Enter Pay check Amount';
	  			break;
	  		}
	  	}

    }
}
