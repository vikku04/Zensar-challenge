import { Component, OnInit } from '@angular/core';

import { DisplayUserService } from 'src/app/services/display-user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent implements OnInit {

  userData: any[] = [];

  constructor(
    private displayService: DisplayUserService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.displayService.getUsersData().subscribe((data) => {
      if (!(data === null || data === undefined)) {
        this.userData = data;
      }
    });
  }

}
