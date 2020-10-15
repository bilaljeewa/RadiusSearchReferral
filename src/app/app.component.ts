import { Component, OnInit } from '@angular/core';
import { SystemParamsService } from './services/system-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userCredential';
  value:string='';
  licensedToText:string='';
  constructor(private systemParamsService : SystemParamsService ){

  }
  ngOnInit(){
    
    this.systemParamsService.getSystemParameter('System_Control.LicensedTo').subscribe((res:string)=>{
      console.log('LicensedTo: ',res);
      this.licensedToText=res;
    })

    
  }

  onClick(){
    alert('Value: '+this.value);
  }

  onBlur(event:any){
    this.value = event.target.value;
  }
}
