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
import {LanguagelistComponent} from "./components/languagelist/languagelist.component";
import {GamelistComponent} from "./components/gamelist/gamelist.component";
import {SoftwarelistComponent} from "./components/softwarelist/softwarelist.component";
import {PhonecontactlistComponent} from "./components/phonecontactlist/phonecontactlist.component";
import {MusicplaylistsComponent} from "./components/musicplaylists/musicplaylists.component";
import {FoodmenulistComponent} from "./components/foodmenulist/foodmenulist.component";
import {GrocerylistComponent} from "./components/grocerylist/grocerylist.component";
import {ClassroomlistComponent} from "./components/classroomlist/classroomlist.component";
import {InventorylistComponent} from "./components/inventorylist/inventorylist.component";
import {LecturelistComponent} from "./components/lecturelist/lecturelist.component";
import {StationerylistComponent} from "./components/stationerylist/stationerylist.component";



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
  {path: 'Languagelist', component: LanguagelistComponent},
  {path: 'Gamelist', component: GamelistComponent},
  {path: 'Softwarelist', component: SoftwarelistComponent},
  {path: 'Phonecontactlist', component: PhonecontactlistComponent},
  {path: 'Musicplaylist', component: MusicplaylistsComponent},
  {path: 'Foodmenulist', component: FoodmenulistComponent},
  {path: 'Grocerylist', component: GrocerylistComponent},
  {path: 'Classroomlist', component: ClassroomlistComponent},
  {path: 'Inventorylist', component: InventorylistComponent},
  {path: 'Lecturelist', component: LecturelistComponent},
  {path: 'Stationerylist', component: StationerylistComponent},
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
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonecontactlistComponent,
    MusicplaylistsComponent,
    FoodmenulistComponent,
    GrocerylistComponent,
    ClassroomlistComponent,
    InventorylistComponent,
    LecturelistComponent,
    StationerylistComponent,

  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}



