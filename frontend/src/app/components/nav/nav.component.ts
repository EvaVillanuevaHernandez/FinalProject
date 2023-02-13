import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = false;
  dataUser: any;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.dataUser = this.storage.getUser();
    // this.getUser();
  } 

  constructor(
    private storage: StorageService,
  ) {}
}
