import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemParamsService } from './services/system-params.service';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userCredential';
  value:string='';
  licensedToText:string='';
  userForm: FormGroup;
  message: any='Please wait';
  showAlert: boolean;
  imisId:any;
  successWarning: boolean;

  constructor(private systemParamsService : SystemParamsService,public fb: FormBuilder ){

    let location = window.location.href
    console.log(location)
    console.log(location.split('?Id=')[1].split('&')[0])
    this.imisId = location.split('?Id=')[1].split('&')[0]

  }
  ngOnInit(){
    
    this.systemParamsService.getSystemParameter('System_Control.LicensedTo').subscribe((res:string)=>{
      
      this.licensedToText=res;
    })
    this.createTable()
    
  }

  createTable(){
		this.userForm= this.fb.group({
			userName: ['',Validators.required],
			email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
			phone: ['',[ Validators.required,Validators.pattern(/^[0-9]\d*$/)] ],
			message: ['',Validators.required],
      licenseTo: ['',Validators.required],
      imisId: ['']
    })
    
	}

  onClick(){
    this.userForm.get('licenseTo').setValue(this.licensedToText)
    this.userForm.get('imisId').setValue(this.imisId)
    if(this.userForm.valid){
      let data = this.userForm.getRawValue()
      this.successWarning= false
      this.message= 'Please wait'
      
      this.showAlert=true
      this.systemParamsService.submitUserData(data).subscribe(resp=>{
        console.log(resp)
        if(resp['status'] == 'true'){
          this.message = resp['message']
          this.successWarning= true
          this.userForm.get('userName').reset()
          this.userForm.get('phone').reset()
          this.userForm.get('email').reset()
          this.userForm.get('message').reset()
        }else{
          this.message = 'Something went wrong'
        }
      })
    }else{
      console.log("not valid",this.userForm)
      this.userForm.markAllAsTouched();
      this.showAlert=false
    }
    
   // alert('Value: '+this.value);
  }

  onBlur(event:any){
    this.value = event.target.value;
  }
  closeAlert(){
    this.showAlert=false;
    this.message='Please wait'
  }
}
