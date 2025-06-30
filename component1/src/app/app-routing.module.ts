import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpgaeComponent } from 'src/loginpgae/loginpgae.component';

const routes: Routes = [
  {path:'login', component: LoginpgaeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
