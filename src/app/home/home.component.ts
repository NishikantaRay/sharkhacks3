import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required]
  })
  regForm = this.fb.group({
    mail: ['', Validators.required],
    adTitle: ['', Validators.required],
    adDesc: ['', Validators.required]
  })
  ngOnInit(): void {
    
  }
  
  onSubmitForm() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm.value);
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
