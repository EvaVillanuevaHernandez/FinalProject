import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  searchcriteria = new EventEmitter<String>();
  searchword: String | undefined;
  
  searchThis() {
    this.searchcriteria.emit(this.searchword)
}
}
