import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  dataUser: any;

  ngOnInit(): void {
    this.dataUser = this.storage.getUser();
    // this.getUser();
  }

  constructor(
    private storage: StorageService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  // get usernameUser() {
  //   return this.dataUser.username;
  // }
  // get emailUsername() {
  //   return this.dataUser.email;
  // }

  getUser() {
    // const id = this.activatedRoute.snapshot.params['id'];
    // var dataUser = this.userService.getUser(id);
    // dataUser.forEach((data) => {
    //   this.username= data.username;
    //   this.email = data.email;
    //   console.log
    // });
  }
}
