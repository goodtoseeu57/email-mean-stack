import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Members } from '../../models/Members';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  selectedUser: Members;

  constructor(
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getMember(id).subscribe(user => (this.user = user));
  }
  goBack() {
    this.location.back();
  }

  selectUser(user: any, message: string) {
    this.selectedUser = user;
  }
}
