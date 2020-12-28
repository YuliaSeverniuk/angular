import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  data;
  emptyData = {
    name: null, 
    surename: null, 
    email: null, 
    descriptione: null
  };
  formData = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  contactFormData(contactForm: NgForm): void {
    this.data = contactForm.value;
    console.log(this.data);
    Object.assign(this.formData, this.emptyData);
    console.log(this.formData);
    this.router.navigate(['/contactSuccess']);
  }

}