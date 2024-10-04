import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Route, RouterModule} from "@angular/router";
import { StudentlistComponent } from "./components/studentlist/studentlist.component";
import {FormsModule} from "@angular/forms";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {FruitlistComponent} from "./components/fruitlist/fruitlist.component";
import {CourselistComponent} from "./components/courselist/courselist.component";
import {BooklistComponent} from "./components/booklist/booklist.component";
import {CitylistComponent} from "./components/citylist/citylist.component";
import {MovielistComponent} from "./components/movielist/movielist.component";
import {CarmodellistComponent} from "./components/carmodellist/carmodellist.component";
import {ProductlistComponent} from "./components/productlist/productlist.component";
import {SubjectlistComponent} from "./components/subjectlist/subjectlist.component";
import {CountrylistComponent} from "./components/countrylist/countrylist.component";
import {SportslistComponent} from "./components/sportslist/sportslist.component";
import {VegetablelistComponent} from "./components/vegetablelist/vegetablelist.component";
import {AnimallistComponent} from "./components/animallist/animallist.component";
import {ToollistComponent} from "./components/toollist/toollist.component";



const routes: Route[] = [
  {path: 'Studentlist', component: StudentlistComponent},
  {path: 'Employeelist', component: EmployeelistComponent},
  {path: 'Fruitlist', component: FruitlistComponent},
  {path: 'Courselist', component: CourselistComponent},
  {path: 'Booklist', component: BooklistComponent},
  {path: 'Citylist', component: CitylistComponent},
  {path: 'Movielist', component: MovielistComponent},
  {path: 'Carmodellist', component: CarmodellistComponent},
  {path: 'Productlist', component: ProductlistComponent},
  {path: 'Subjectlist', component: SubjectlistComponent},
  {path: 'Countrylist', component: CountrylistComponent},
  {path: 'Sportslist', component: SportslistComponent},
  {path: 'Vegetablelist', component: VegetablelistComponent},
  {path: 'Animallist', component: AnimallistComponent},
  {path: 'Toollist', component: ToollistComponent},

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
    FruitlistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductlistComponent,
    SubjectlistComponent,
    CountrylistComponent,
    SportslistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,

  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}



