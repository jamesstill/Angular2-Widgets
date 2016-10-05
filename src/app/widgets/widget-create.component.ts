import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Widget } from './shared/widget';
import { WidgetService } from './shared/widget.service';

@Component({
    moduleId: module.id,
    selector: 'widget-create',
    templateUrl: 'widget-create.component.html'
})
export class WidgetCreateComponent implements OnInit {

    @ViewChild(NgForm) widgetForm: NgForm;
    pageTitle: string = "Create Widget";
    widget: Widget;
    errorMessage: string;

    // ask Angular to inject services that the component will need
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: WidgetService) { 
    }

    ngOnInit() : void { 
        this.widget = {
            ID: 0,
            Name: "",
            Shape: ""
        };
    }

    saveWidget(createForm: NgForm) {
        if (createForm.dirty && createForm.valid) {
            this.service.saveWidget(this.widget)
                .subscribe(
                    (widget: Widget) => this.onWidgetSaved(widget),
                    error => this.errorMessage = <any>error);
        }
    }

    // save is async so don't navigate until this event fires
    // or else the widget list might be populated before the save
    onWidgetSaved(widget: Widget) {
        this.router.navigate(['/widgets']);
    }

    onBack() {
        this.router.navigate(['/widgets']);
    }
}