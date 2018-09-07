import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

