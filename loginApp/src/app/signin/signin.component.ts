import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  mySubmittedForm = {
    username: '',
    password: ''
  }

  isTrue: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const storedData = JSON.parse(localStorage.getItem('storedData'));
    console.log(storedData);
    for (let index = 0; index < storedData.length; index++) {
      if (storedData[index].uname === this.mySubmittedForm.username && storedData[index].password === this.mySubmittedForm.password) {
        this.router.navigate(['home']);
      }else{
        this.isTrue = true;
      }
      
    }
    
    
  }

}
