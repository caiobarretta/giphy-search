import { PageNotFoundComponent } from './pagenotfound.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
