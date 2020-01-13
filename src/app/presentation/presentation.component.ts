import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Members} from '../../models/Members';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  members: any = new Array<Members>();
  showDetails = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMember();
  }
  showMembers() {
    this.showDetails = !this.showDetails;
  }

  getMember() {
    this.apiService.getMembers().subscribe(response =>
      this.members = response);
  }

  eventShow(event) {
    console.log('this is the event' , event);
  }

}
