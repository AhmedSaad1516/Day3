import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisComponent } from 'src/producet/compoent/detalis/detalis.component';
import { HomeComponent } from 'src/producet/compoent/home/home.component';


const routes: Routes = [
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'detalis/:id', component:DetalisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
