import { Injectable } from '@angular/core';

@Injectable()
export class WidgetConfiguration {
    private server: string = "http://angularwidgetsapi.azurewebsites.net";
    //private server: string = "http://localhost:4857";
    private api: string = "api/v1/widget";
    public Url = this.server + "/" + this.api;
}