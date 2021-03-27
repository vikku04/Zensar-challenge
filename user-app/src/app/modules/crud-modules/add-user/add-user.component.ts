import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  id: any;
  image: any;
  name: any;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal
  ) {
    this.userForm = formBuilder.group({
      id: [null],
      img: [null],
      name: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(document.getElementById('id'));
    console.log(document.getElementById('image'));
    console.log(document.getElementById('nm'));
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
