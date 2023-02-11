import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = false;


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
