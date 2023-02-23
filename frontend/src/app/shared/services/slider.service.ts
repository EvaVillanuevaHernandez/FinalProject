import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  constructor() { }

  Load(files: string[]) {
    for (let file of files) {
      let script = document.createElement("script");
      script.src = "./assets/slider/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}