import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page2/page3/page3.component';

const routes: Routes = [
    {
        path: 'page2',
        component: Page2Component,
        children: [
            { path: 'page3', component: Page3Component }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
