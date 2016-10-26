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
var widget_service_1 = require('./shared/widget.service');
var WidgetDetailComponent = (function () {
    // ask Angular to inject services that the component will need
    function WidgetDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = "Widget Detail";
    }
    WidgetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getWidget(id);
        });
    };
    WidgetDetailComponent.prototype.getWidget = function (id) {
        var _this = this;
        this.service.getWidget(id)
            .subscribe(function (widget) { return _this.widget = widget; }, function (error) { return _this.errorMessage = error; });
    };
    WidgetDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/widgets']);
    };
    WidgetDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WidgetDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'widget-detail',
            templateUrl: 'widget-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, widget_service_1.WidgetService])
    ], WidgetDetailComponent);
    return WidgetDetailComponent;
}());
exports.WidgetDetailComponent = WidgetDetailComponent;
//# sourceMappingURL=widget-detail.component.js.map