import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mySubmittedForm = {
    fullname: '',
    mobile: '',
    email: '',
    address: '',
    gender: ''
  }
  recordedData: any = [];
  other: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    //console.log(this.mySubmittedForm);
    this.recordedData = JSON.parse(localStorage.getItem('storedData'));
    if (this.recordedData === null) {
      this.other.push(this.mySubmittedForm);
    localStorage.setItem('storedData', JSON.stringify(this.other));
    }else{
    this.recordedData.push(this.mySubmittedForm);
    localStorage.setItem('storedData', JSON.stringify(this.recordedData));
    }
    this.router.navigate(['customers']);
  }

}
