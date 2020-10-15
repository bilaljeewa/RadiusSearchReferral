import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ContextService } from './context.service';

export class ServiceBase {
    
    constructor(private contextService: ContextService){        
    }
    getHeaders(): HttpHeaders{
        if(this.contextService.proxy)
          return new HttpHeaders().set('Authorization','Bearer '+ this.contextService.authToken).set('Content-Type','application/json');
        
        return new HttpHeaders().set('RequestVerificationToken', this.contextService.authToken).set('Content-Type','application/json');
    
    }
    getUrl(request:string):string{
        if(this.contextService.proxy)
            return 'api/'+request;
        return this.contextService.baseUrl+'api/'+request;
    }
    handleError(error: HttpErrorResponse) {
        console.log('Error with http request: ',error);
        return throwError(error);
      }
    
}