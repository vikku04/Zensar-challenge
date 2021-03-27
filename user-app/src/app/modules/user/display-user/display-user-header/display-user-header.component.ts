import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddUserComponent } from 'src/app/modules/crud-modules/add-user/add-user.component';

@Component({
  selector: 'app-display-user-header',
  templateUrl: './display-user-header.component.html',
  styleUrls: ['./display-user-header.component.scss']
})
export class DisplayUserHeaderComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onAddUser(): void {
    this.modalService.open(AddUserComponent, {backdrop: 'static'});
  }

}
