import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OpportunityDetailComponent } from './opportunity-detail/opportunity-detail.component';
import { OpportunitylistComponent } from './opportunitylist/opportunitylist.component';

const routes: Routes = [
  { path:'opportunity-detail', component: OpportunityDetailComponent},
  { path:'**', component: OpportunitylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } 
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
