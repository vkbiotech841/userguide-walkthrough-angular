import { BasicWalkthroughComponent } from './basic-walkthrough/basic-walkthrough.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "basic-walkthrough", component: BasicWalkthroughComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
