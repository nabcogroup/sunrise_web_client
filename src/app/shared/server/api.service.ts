import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  baseUri = 'http://localhost:8081/api';
  headers = new Headers();
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-CSRF-TOKEN', 'NXRcpwGNJ4lm791NNmq2BmEXPjo6Ne30OdyC36DI');
    this.options = new RequestOptions({ 'headers': this.headers });
  }

  getApi(uri, params = null) {

    return this.http.get(this.baseUri + '/' + uri, this.options).map(result => result.json());
  }

}
