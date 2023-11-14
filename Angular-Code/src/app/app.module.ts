import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';

import {AppComponent} from './app.component';
import {CalendarComponent} from './primeng/calendar/calendar.component';
import {PrimengComponent} from './primeng/primeng.component';
import {CheckboxComponent} from './primeng/checkbox/checkbox.component';
import {DropdownComponent} from './primeng/dropdown/dropdown.component';
import {InputTextComponent} from './primeng/input-text/input-text.component';
import {InputNumberComponent} from './primeng/input-number/input-number.component';
import {TableComponent} from './primeng/table/table.component';
import {AccordionComponent} from './primeng/accordion/accordion.component';
import {CardComponent} from './primeng/card/card.component';
import {DividerComponent} from './primeng/divider/divider.component';
import {FieldsetComponent} from './primeng/fieldset/fieldset.component';
import {PanelComponent} from './primeng/panel/panel.component';
import {SplitterComponent} from './primeng/splitter/splitter.component';
import {ScrollPanelComponent} from './primeng/scroll-panel/scroll-panel.component';
import {TabViewComponent} from './primeng/tab-view/tab-view.component';
import {HomeComponent} from './home/home.component';
import {DialogComponent} from './primeng/dialog/dialog.component';
import {OverlayPanelComponent} from './primeng/overlay-panel/overlay-panel.component';
import {SidebarComponent} from './primeng/sidebar/sidebar.component';
import {TooltipComponent} from './primeng/tooltip/tooltip.component';
import {NewComponent} from './new/new.component';
import {Parent1Component} from './data-binding/atInput-atOutput/parent1/parent1.component';
import {Child1Component} from './data-binding/atInput-atOutput/child1/child1.component';
import {Parent2Component} from './data-binding/ngContent-atContentChild/parent2/parent2.component';
import {Child2Component} from './data-binding/ngContent-atContentChild/child2/child2.component';
import {CustomDirectivesComponent} from './directives/custom-directives/custom-directives.component';
import {CustomStructuralDirective} from './directives/custom-directives/custom-structural-directives/custom-structural.directive';
import {CustomAttributeDirective} from './directives/custom-directives/custom-attribute-directives/custom-attribute.directive';
import {ServicesComponent} from './services/services.component';
import {BasicService} from "./services/basic-service/basic.service";
import {NgrxComponent} from './ngrx/ngrx.component';
import {StoreModule} from '@ngrx/store';
import {listReducer} from "./ngrx/list.reducer";
import { EffectsModule } from '@ngrx/effects';
import {ListEffects} from "./ngrx/list.effects";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    PrimengComponent,
    CheckboxComponent,
    DropdownComponent,
    InputTextComponent,
    InputNumberComponent,
    TableComponent,
    AccordionComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    SplitterComponent,
    ScrollPanelComponent,
    TabViewComponent,
    HomeComponent,
    DialogComponent,
    OverlayPanelComponent,
    SidebarComponent,
    TooltipComponent,
    NewComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    CustomDirectivesComponent,
    CustomStructuralDirective,
    CustomAttributeDirective,
    ServicesComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    DialogModule,
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,
    StoreModule.forRoot({
      listReducerImport: listReducer
    }),
    EffectsModule.forRoot([ListEffects])
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
