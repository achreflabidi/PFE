import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidatForm : FormGroup;
  TabUSers : any;

  constructor(){

     
      this.candidatForm = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Adress: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      PostalCode: new FormControl('', [Validators.required]),
      
     
      Country: new FormControl('', [Validators.required]),
    });
   
  }
  ngOnInit() {
  }

}
