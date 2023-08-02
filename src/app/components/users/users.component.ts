
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { UsersInterface } from '../models/UsersInterface';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs';
import { FilterService } from '../shared/filter.service';
import { ComponentsService } from '../shared/components.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: UsersInterface[] = [];
  modalUser: UsersInterface | undefined;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  filteredUsers: UsersInterface[] = [];
  private subscription: Subscription | undefined;

  errorOccurred: boolean = false
  loading: boolean = true;


  constructor(
    private componentService: ComponentsService,
    private modalService: NgbModal,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.componentService.list().subscribe(
      (users: UsersInterface[]) => {
        this.users = users;
        this.filterUsers();
        this.loading = false;
      },
      (error) => {
        this.errorOccurred = true;
        this.loading = false;
      }
    );

 this.subscription = this.filterService.searchText$.subscribe((searchText: string) => {
  this.filterUsers(searchText);
});
}


ngOnDestroy(): void {
this.subscription?.unsubscribe();
}

  openModal(user: UsersInterface) {
    this.modalUser = user;
    this.modalService.open(this.modalTemplate);
  }

  closeModal() {
    this.modalService.dismissAll();
    this.modalUser = undefined;
  }

  filterUsers(searchText: string = '') {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
