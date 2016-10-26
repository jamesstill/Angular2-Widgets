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
var widget_service_1 = require('./shared/widget.service');
var WidgetListComponent = (function () {
    function WidgetListComponent(service) {
        this.service = service;
        this.pageTitle = "Widget List";
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        this.getWidgets();
    };
    WidgetListComponent.prototype.getWidgets = function () {
        var _this = this;
        this.service.getWidgets()
            .subscribe(function (widgets) { return _this.widgets = widgets; }, function (error) { return _this.errorMessage = error; });
    };
    // using a splice function to avoid an API call
    WidgetListComponent.prototype.deleteWidget = function (widget) {
        var _this = this;
        if (confirm('Are you sure you want to delete the ' + widget.Shape + " " + widget.Name + "?")) {
            this.service.deleteWidget(widget.ID)
                .subscribe(function (response) {
                _this.widgets.forEach(function (w, i) {
                    if (w.ID === widget.ID) {
                        _this.widgets.splice(i, 1);
                    }
                }, function (error) { return _this.errorMessage = error; });
            });
        }
    };
    WidgetListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'widget-list',
            templateUrl: 'widget-list.component.html'
        }), 
        __metadata('design:paramtypes', [widget_service_1.WidgetService])
    ], WidgetListComponent);
    return WidgetListComponent;
}());
exports.WidgetListComponent = WidgetListComponent;
//# sourceMappingURL=widget-list.component.js.map