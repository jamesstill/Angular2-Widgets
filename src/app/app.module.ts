import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetListComponent } from './widgets/widget-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail.component';
import { WidgetEditComponent } from './widgets/widget-edit.component';
import { WidgetCreateComponent } from './widgets/widget-create.component';
import { WidgetService } from './widgets/shared/widget.service';
import { WidgetConfiguration } from './widgets/shared/widget.configuration';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRouting 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    WidgetListComponent,
    WidgetDetailComponent,
    WidgetEditComponent,
    WidgetCreateComponent
  ],
  providers:    [ WidgetService, WidgetConfiguration ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }