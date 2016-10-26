"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var widget_list_component_1 = require('./widgets/widget-list.component');
var widget_detail_component_1 = require('./widgets/widget-detail.component');
var widget_edit_component_1 = require('./widgets/widget-edit.component');
var widget_create_component_1 = require('./widgets/widget-create.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'widgets', component: widget_list_component_1.WidgetListComponent },
    { path: 'widget/:id', component: widget_detail_component_1.WidgetDetailComponent },
    { path: 'widget-edit/:id', component: widget_edit_component_1.WidgetEditComponent },
    { path: 'widget-create', component: widget_create_component_1.WidgetCreateComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map