
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{ HeroesListComponent } from './heroes-list/heroes-list.component';


const routes:Routes=[
{path:'',redirectTo:'heroes-list',pathMatch:'full'},
{path:'heroesList', component:HeroesListComponent}
]

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);