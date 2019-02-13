import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Response } from '@angular/http';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [DataService]
})
export class CustomersComponent implements OnInit {
  savedData: any = [];
  getSavedData: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getSavedData = JSON.parse(localStorage.getItem('storedData'));
    if (this.getSavedData === null) {
      this.dataService.getJsonItems()
      .subscribe((response: Response) => {
        this.savedData = response.json();
      });
    }else{
      this.savedData = this.getSavedData;
    }
  }

  onRegister(){
    this.router.navigate(['/'], {relativeTo: this.activatedRoute});
  }

  onClickCard(index: number): void{
 this.dialog.open(DialogComponent, {
      height: '300px',
      width: '300px',
      data: this.savedData[index]
    });
  }

  

}
