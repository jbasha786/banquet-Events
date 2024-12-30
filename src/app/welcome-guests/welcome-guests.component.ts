import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-welcome-guests',
  standalone: true,
  imports: [CommonModule, MatTableModule,],
  templateUrl: './welcome-guests.component.html',
  styleUrl: './welcome-guests.component.scss'
})
export class WelcomeGuestsComponent {
  
  displayedColumns: string[] = ['timings', 'date', 'resourcedetails', 'contactperson', 'contactnumber','welcomemessage', 'actions'];
  data: any[] = [];

  dataSource = new MatTableDataSource<any>([]);
   constructor( private defaultService: DefaultService) { }
   ngOnInit(): void {
      this.getInitialData();
    }
  
    getInitialData() {
      this.defaultService.getJSON().subscribe(result => {
        this.dataSource = result?.admin_welcomeTable;
      })
    }

}
