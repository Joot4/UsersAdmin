import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'


import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from './shared/filter.service';



@NgModule({
  declarations: [HomeComponent, LoginComponent, UsersComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilterService],
  exports:[]
})
export class ComponentsModule { }
