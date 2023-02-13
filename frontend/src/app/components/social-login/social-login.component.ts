import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
  title = 'loginGoogle';
    
  auth2: any;
    
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
     
  constructor(private router: Router) { }

  ngOnInit() {
     
    this.googleAuthSDK();
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  callLoginButton() {
     console.log("callLoginButton")
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser:any) => {
        console.log("Antes del profile")
        let profile = googleAuthUser.getBasicProfile();
        console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
            
        
    
      }, (error:any) => {
        console.log("Hubo un error")
        console.log(error)
        // alert(JSON.stringify(error, undefined, 2));
      });
 
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  googleAuthSDK() {
     console.log("Hola Holita");
    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '539129123038-inmamfqeg2ad40d5ur1kd5i6vd52d82f.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        console.log("antes del callLoginButton")
        this.callLoginButton();
      });
    }
     
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement('script'); 
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
   
  }
}