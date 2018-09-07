import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contacts = [];
  constructor() { }

  ngOnInit() {
  }
    onClickMe(newText: string) {
        if (newText) {
            this.contacts.push(newText);
        }
}
}
