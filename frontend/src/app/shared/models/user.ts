export class User {
    id?:number;
    email:string;
    username:string;
    password:string;

    constructor(username:string, email:string, password:string){
        this.email = email;
        this.username = username;
        this.password = password;
    
    }
}