import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  proxy: boolean=true;
  baseUrl: string;
  authToken:string;
  selectedPartyId:string;
  loggedInPartyId:string;
  constructor() {
    //console.log('getting context')
    var data = (document.querySelector('#__ClientContext') as HTMLInputElement).value;// document.querySelector("#__ClientContext").value;
    // we used to deserialize straight into this class, but i'm not sure how to structure this
    var appContext = JSON.parse(data);
    appContext.authToken = (document.querySelector('#__RequestVerificationToken') as HTMLInputElement).value;//document.querySelector("#__RequestVerificationToken").value;
    this.baseUrl = appContext.baseUrl;    
    this.authToken = appContext.authToken;
    //this.headers['Authorization'] = 'Bearer ' + '[Your Token goes here!!!! without brackets]'; 
    //this.headers['Content-Type'] = 'application/json';     
    this.selectedPartyId = appContext.selectedPartyId;
    this.loggedInPartyId = appContext.loggedInPartyId;
   }
}
