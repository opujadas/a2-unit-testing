import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  username = 'Olivier';
  title = 'pujiapp';

  function compute(number)
  {
  	if (number < 0)
  		return 0; 
  	return number + 1; 
  }

}
