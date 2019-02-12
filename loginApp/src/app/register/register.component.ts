import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm =  {
    fname: '',
    lname: '',
    uname: '',
    password: '',
    id: ''
  }

  recordedData: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.recordedData = JSON.parse(localStorage.getItem('storedData'));
    this.myForm.id = 'user_' + Date.now();
    this.recordedData.push(this.myForm);
    //console.log(this.recordedData);
    localStorage.setItem('storedData', JSON.stringify(this.recordedData));
    this.router.navigate(['']);
  }

  onCancel(form: NgForm){
    form.setValue({
    fname: '',
    lname: '',
    uname: '',
    password: ''
    })
  }

}
