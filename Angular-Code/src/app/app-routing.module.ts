import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from "./primeng/calendar/calendar.component";
import {PrimengComponent} from "./primeng/primeng.component";
import {CheckboxComponent} from "./primeng/checkbox/checkbox.component";
import {DropdownComponent} from "./primeng/dropdown/dropdown.component";
import {InputNumberComponent} from "./primeng/input-number/input-number.component";
import {InputTextComponent} from "./primeng/input-text/input-text.component";
import {TableComponent} from "./primeng/table/table.component";
import {AccordionComponent} from "./primeng/accordion/accordion.component";
import {CardComponent} from "./primeng/card/card.component";
import {DividerComponent} from "./primeng/divider/divider.component";
import {FieldsetComponent} from "./primeng/fieldset/fieldset.component";
import {PanelComponent} from "./primeng/panel/panel.component";
import {SplitterComponent} from "./primeng/splitter/splitter.component";
import {ScrollPanelComponent} from "./primeng/scroll-panel/scroll-panel.component";
import {TabViewComponent} from "./primeng/tab-view/tab-view.component";
import {HomeComponent} from "./home/home.component";
import {DialogComponent} from "./primeng/dialog/dialog.component";
import {OverlayPanelComponent} from "./primeng/overlay-panel/overlay-panel.component";
import {SidebarComponent} from "./primeng/sidebar/sidebar.component";
import {TooltipComponent} from "./primeng/tooltip/tooltip.component";
import {NewComponent} from "./new/new.component";
import {CustomDirectivesComponent} from "./directives/custom-directives/custom-directives.component";
import {ServicesComponent} from "./services/services.component";
import {NgrxComponent} from "./ngrx/ngrx.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "new", component: NewComponent},
  {path: "custom-directives", component: CustomDirectivesComponent},
  {path: "services", component: ServicesComponent},
  {path: "ngrx", component: NgrxComponent},
  {path: "primeng", component: PrimengComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "checkbox", component: CheckboxComponent},
  {path: "dropdown", component: DropdownComponent},
  {path: "input-text", component: InputTextComponent},
  {path: "input-number", component: InputNumberComponent},
  {path: "table", component: TableComponent},
  {path: "accordion", component: AccordionComponent},
  {path: "card", component: CardComponent},
  {path: "divider", component: DividerComponent},
  {path: "fieldset", component: FieldsetComponent},
  {path: "panel", component: PanelComponent},
  {path: "splitter", component: SplitterComponent},
  {path: "scroll-panel", component: ScrollPanelComponent},
  {path: "tab-view", component: TabViewComponent},
  {path: "dialog", component: DialogComponent},
  {path: "overlay-panel", component: OverlayPanelComponent},
  {path: "sidebar", component: SidebarComponent},
  {path: "tooltip", component: TooltipComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
