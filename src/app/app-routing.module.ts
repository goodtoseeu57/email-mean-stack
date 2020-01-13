import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent} from './presentation/presentation.component';
import {UserDetailsComponent} from './user-details/user-details.component';


const routes: Routes = [{path: '' , pathMatch: 'full' , redirectTo: 'presentation'},
  {path: 'presentation' , component: PresentationComponent},
  {path: 'presentation/:id' , component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
