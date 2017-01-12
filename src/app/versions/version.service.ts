import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import './../rxjs-operators';

@Injectable()
export class VersionService {

  private baseUrl: string = 'http://localhost:52277/api/';

  constructor(private http: Http) { }

  getVersions(): Observable<any[]> {
    return this.http.get(this.baseUrl + 'versions')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
