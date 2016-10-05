import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Widget } from './shared/widget';
import { WidgetService } from './shared/widget.service';

@Component({
    moduleId: module.id,
    selector: 'widget-edit',
    templateUrl: 'widget-edit.component.html'
})
export class WidgetEditComponent implements OnInit, OnDestroy {

    @ViewChild(NgForm) widgetForm: NgForm;
    pageTitle: string = "Edit Widget";
    widget: Widget;
    errorMessage: string;
    private subscription: Subscription;

    // ask Angular to inject services that the component will need
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: WidgetService) { 
    }

    ngOnInit() : void {
        this.subscription = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getWidget(id);
            }
        )
     }

     getWidget(id: number) {
         this.service.getWidget(id)
         .subscribe(
             (widget: Widget) => this.onWidgetRetrieved(widget),
              (error: any) => this.errorMessage = <any>error);
     }

     onWidgetRetrieved(widget: Widget) {
         if (this.widgetForm)
            this.widgetForm.resetForm();

        this.widget = widget;
     }

     saveWidget(editForm: NgForm) {
         if (editForm.dirty && editForm.valid) {
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

    ngOnDestroy() { 
        this.subscription.unsubscribe();
    }
}