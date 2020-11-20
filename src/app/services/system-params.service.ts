import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextService } from './context.service';
import { ServiceBase } from './service-base';
import { PagedResult } from '../interfaces/asi.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SystemParamsService extends ServiceBase {

  constructor(private httpClient: HttpClient,contextService : ContextService) { 
    super(contextService)
  }
  public getSystemParameter(param:string):Observable<string>{
    console.log('getSystemParameter(',param,')');
    let headers = this.getHeaders();
    let params = new HttpParams().set('ParameterName','eq:'+param);
    let url = this.getUrl("SystemParam");
    return this.httpClient.get(url,{params,headers}).pipe(
        map((res:PagedResult)=>{
          console.log('PagedResult: ',res);
          let value = res.Items.$values.length > 0 ? res.Items.$values[0].ShortValue : '';
          return value;
        }
        )).pipe(catchError(this.handleError));
  }

  public submitUserData(param:string):Observable<string>{
    console.log(param)
    let apiUrl = 'https://3xykhh5d4e.execute-api.us-east-2.amazonaws.com/radius2/getdata';
    //let apiUrl = 'https://3xykhh5d4e.execute-api.us-east-2.amazonaws.com/RadiusSearchReferral/getdata';
    //let apiUrl = 'https://yb9ex8gr0j.execute-api.us-east-2.amazonaws.com/RadiusSearchReferral/searchAPI'
    let rawData = {
      param
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(apiUrl, param, { headers })
      .pipe(map((res) => res['Items'])).pipe(catchError(this.handleError));
  }
}
