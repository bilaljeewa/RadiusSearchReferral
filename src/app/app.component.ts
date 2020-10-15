import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userCredential';
  value:string='';
  onClick(){
    alert('Value: '+this.value);
  }

  onBlur(event:any){
    this.value = event.target.value;
  }
}
