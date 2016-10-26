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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var widget_service_1 = require('./shared/widget.service');
var WidgetCreateComponent = (function () {
    // ask Angular to inject services that the component will need
    function WidgetCreateComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = "Create Widget";
    }
    WidgetCreateComponent.prototype.ngOnInit = function () {
        this.widget = {
            ID: 0,
            Name: "",
            Shape: ""
        };
    };
    WidgetCreateComponent.prototype.saveWidget = function (createForm) {
        var _this = this;
        if (createForm.dirty && createForm.valid) {
            this.service.saveWidget(this.widget)
                .subscribe(function (widget) { return _this.onWidgetSaved(widget); }, function (error) { return _this.errorMessage = error; });
        }
    };
    // save is async so don't navigate until this event fires
    // or else the widget list might be populated before the save
    WidgetCreateComponent.prototype.onWidgetSaved = function (widget) {
        this.router.navigate(['/widgets']);
    };
    WidgetCreateComponent.prototype.onBack = function () {
        this.router.navigate(['/widgets']);
    };
    __decorate([
        core_1.ViewChild(forms_1.NgForm), 
        __metadata('design:type', forms_1.NgForm)
    ], WidgetCreateComponent.prototype, "widgetForm", void 0);
    WidgetCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'widget-create',
            templateUrl: 'widget-create.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, widget_service_1.WidgetService])
    ], WidgetCreateComponent);
    return WidgetCreateComponent;
}());
exports.WidgetCreateComponent = WidgetCreateComponent;
//# sourceMappingURL=widget-create.component.js.map