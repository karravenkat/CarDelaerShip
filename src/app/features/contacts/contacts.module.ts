import { NgModule} from '@angular/core';

import { MaterialFormsModule } from '@app/shared/forms/material-forms.module';
import { SharedModule } from '@app/shared/shared.module';


import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactService } from './shared/contact.service';


@NgModule({
    imports: [
        SharedModule,
        MaterialFormsModule,
        ContactsRoutingModule 
    ],
    declarations: [        
        ContactListComponent        
    ],
    providers: [
        ContactService
    ],
    entryComponents: [        
    ]
})

export class ContactsModule { }
