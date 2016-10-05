import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Widget } from './shared/widget';
import { WidgetService } from './shared/widget.service';

@Component({
    moduleId: module.id,
    selector: 'widget-list',
    templateUrl: 'widget-list.component.html'
})
export class WidgetListComponent implements OnInit {

    pageTitle: string = "Widget List";
    widgets: Widget[];
    errorMessage: string;

    constructor(private service: WidgetService) { }

    ngOnInit() {  
        this.getWidgets();
    }

    getWidgets() {
        this.service.getWidgets()
            .subscribe(
                (widgets: Widget[]) => this.widgets = widgets,
                (error: any) => this.errorMessage = <any>error);
    }

    // using a splice function to avoid an API call
    deleteWidget(widget: Widget) {
        if (confirm('Are you sure you want to delete the ' + widget.Shape + " " + widget.Name + "?")) {
            this.service.deleteWidget(widget.ID)
                .subscribe(
                    response => {
                        if (response.status == 200) {
                            this.widgets.forEach((w: Widget, i: number) => {
                                if (w.ID === widget.ID) {
                                    this.widgets.splice(i, 1);
                                }
                            }
                        }
                    }
                );
        }
    }
}