import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Widget } from './widget';
import { WidgetConfiguration } from './widget.configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WidgetService {
    
    private url: string;
    private headers: Headers;
   
    constructor(private http: Http, private configuration: WidgetConfiguration) { 
        this.url = configuration.Url;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getWidgets() : Observable<Widget[]> {
        return this.http.get(this.url)
            .map(response => <Widget[]> response.json())
            .catch(this.handleError);
    }

    getWidget(id: number) : Observable<Widget> {
        let url = this.url + "/" + id;
        return this.http.get(url)
            .map(response => <Widget>response.json())
            .catch(this.handleError);
    }

    saveWidget(item: Widget) : Observable<Widget> {
        let body = JSON.stringify(item);
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteWidget(id: number) {
        let url = this.url + "/" + id;
        console.log("deleteWidget url: " + url);
        let options = new RequestOptions({ headers: this.headers });
        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we would want to log somewhere external
        // instead of just logging it to the console
        console.error("Error: " + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
        console.log("extractData: " + body);
        return body.data || { };
    }
}
