import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './home/pages/page1/page1.component';
import { Page2Component } from './home/pages/page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: '**',
    redirectTo: '',
    component: Page1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
