import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Widget } from './shared/widget';
import { WidgetService } from './shared/widget.service';

@Component({
    moduleId: module.id,
    selector: 'widget-detail',
    templateUrl: 'widget-detail.component.html'
})
export class WidgetDetailComponent implements OnInit, OnDestroy {

    pageTitle: string = "Widget Detail";
    widget: Widget;
    errorMessage: string;
    private subscription: Subscription;

    // ask Angular to inject services that the component will need
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: WidgetService) { 
    }

    ngOnInit(): void {
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
                (widget: Widget) => this.widget = widget,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack() {
        this.router.navigate(['/widgets']);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}