import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

//import { ConfirmedDialogComponent } from '../../../shared/dialogs/confirmed-dialog/confirmed-dialog.component';
//import { Logger } from '../../../core/logger/logger.service';
import { ConfirmedDialogComponent } from '@app/shared/dialogs';
import { Logger } from '@app/core';

import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service'

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    displayedColumns: string[];
    dataSource = new MatTableDataSource();
    screenHeight: any;
    screenWidth: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @HostListener('window:resize', ['$event'])
        onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
        this.setDisplayedColumns();
    }
    
    constructor(
        private contactService: ContactService, 
        private logger: Logger, 
        private dialog: MatDialog) {

        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
        this.setDisplayedColumns();
    }

    ngOnInit() {
        this.loadContacts();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    loadContacts() {
        this.contactService.getContacts().subscribe(data => {
            this.dataSource.data = data;
        });
    }
    
        

    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    setDisplayedColumns() {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['id', 'make', 'year', 'color'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['id', 'make', 'year', 'color', 'price'];
        }
        else {
            this.displayedColumns = ['id', 'make', 'year', 'color', 'price', 'hasSunroof', 'isFourWheelDrive', 'hasLowMiles', 'hasPowerWindows', 'hasNavigation', 'hasHeatedSeats'];
        }
    }
}

