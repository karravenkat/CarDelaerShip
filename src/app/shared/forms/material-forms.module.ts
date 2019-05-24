import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material/material.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
       
    ],
    exports:[ 
        MaterialModule,
        
    ],
    entryComponents: [
       
    ]
})

export class MaterialFormsModule { }

