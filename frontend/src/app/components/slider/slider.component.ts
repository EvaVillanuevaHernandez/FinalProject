import { Component } from '@angular/core';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  public search: string = '';
  public miToken: number;
  
  constructor(private name: SliderService) {
    this.miToken = 0;
    name.Load(["slider"]);
  }
}