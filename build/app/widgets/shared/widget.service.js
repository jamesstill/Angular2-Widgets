"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var widget_configuration_1 = require('./widget.configuration');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var WidgetService = (function () {
    function WidgetService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.url = configuration.Url;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    WidgetService.prototype.getWidgets = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WidgetService.prototype.getWidget = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WidgetService.prototype.saveWidget = function (item) {
        var body = JSON.stringify(item);
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.post(this.url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WidgetService.prototype.deleteWidget = function (id) {
        var url = this.url + "/" + id;
        console.log("deleteWidget url: " + url);
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.delete(url, options)
            .catch(this.handleError);
    };
    WidgetService.prototype.handleError = function (error) {
        // in a real world app, we would want to log somewhere external
        // instead of just logging it to the console
        console.error("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    WidgetService.prototype.extractData = function (response) {
        var body = response.json();
        console.log("extractData: " + body);
        return body.data || {};
    };
    WidgetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, widget_configuration_1.WidgetConfiguration])
    ], WidgetService);
    return WidgetService;
}());
exports.WidgetService = WidgetService;
//# sourceMappingURL=widget.service.js.map