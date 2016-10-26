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
var WidgetEditComponent = (function () {
    // ask Angular to inject services that the component will need
    function WidgetEditComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = "Edit Widget";
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getWidget(id);
        });
    };
    WidgetEditComponent.prototype.getWidget = function (id) {
        var _this = this;
        this.service.getWidget(id)
            .subscribe(function (widget) { return _this.onWidgetRetrieved(widget); }, function (error) { return _this.errorMessage = error; });
    };
    WidgetEditComponent.prototype.onWidgetRetrieved = function (widget) {
        if (this.widgetForm)
            this.widgetForm.resetForm();
        this.widget = widget;
    };
    WidgetEditComponent.prototype.saveWidget = function (editForm) {
        var _this = this;
        if (editForm.dirty && editForm.valid) {
            this.service.saveWidget(this.widget)
                .subscribe(function (widget) { return _this.onWidgetSaved(widget); }, function (error) { return _this.errorMessage = error; });
        }
    };
    // save is async so don't navigate until this event fires
    // or else the widget list might be populated before the save
    WidgetEditComponent.prototype.onWidgetSaved = function (widget) {
        this.router.navigate(['/widgets']);
    };
    WidgetEditComponent.prototype.onBack = function () {
        this.router.navigate(['/widgets']);
    };
    WidgetEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild(forms_1.NgForm), 
        __metadata('design:type', forms_1.NgForm)
    ], WidgetEditComponent.prototype, "widgetForm", void 0);
    WidgetEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'widget-edit',
            templateUrl: 'widget-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, widget_service_1.WidgetService])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());
exports.WidgetEditComponent = WidgetEditComponent;
//# sourceMappingURL=widget-edit.component.js.map