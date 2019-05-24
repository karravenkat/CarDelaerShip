import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';


const contactsRoutes: Routes = [
    // 1st Route
    {  path: '', component: ContactListComponent },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(contactsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactsRoutingModule { }