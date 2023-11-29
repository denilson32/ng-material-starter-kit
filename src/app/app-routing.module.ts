import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path: 'car-form', component: CarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
