import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Route, RouterModule} from "@angular/router";
import { StudentlistComponent } from "./components/studentlist/studentlist.component";
import {FormsModule} from "@angular/forms";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";



const routes: Route[] = [
  {path: 'Studentlist', component: StudentlistComponent},
  {path: 'Employeelist', component: EmployeelistComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,

  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}



