// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-google-log',
//   templateUrl: './google-log.component.html',
//   styleUrls: ['./google-log.component.scss']
// })

// export class GoogleLogComponent implements OnInit {
//   loading = false;
//   error: any;

//   constructor() { }

//   private async handleGoogle(response: any) {
//     this.loading = true;
//     try {
//       const result = await fetch('http://localhost:4232/signup', {
//         method: 'POST',
//         body: JSON.stringify(response),
//       });
//       const json = await result.json();
//       this.loading = false;
//       console.log(json);
//     } catch (error) {
//       this.loading = false;
//       this.error = error;
//     }
//   }

//   ngOnInit() {
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id: "2539129123038-inmamfqeg2ad40d5ur1kd5i6vd52d82f.apps.googleusercontent.com",
//         callback: this.handleGoogle,
//       });

//       window.google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
//         theme: "filled_black",
//         text: "continue_with",
//         shape: "pill",
//       });
//     }
//   }
// }