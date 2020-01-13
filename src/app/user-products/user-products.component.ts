import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Members} from '../../models/Members';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  @Input() public user1: any;
  @Output() private userSelected: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.user1.email);
  }

  onUserSelected(user1) {
    this.userSelected.emit(user1);

  }

}
