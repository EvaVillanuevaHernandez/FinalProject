export class Doctor {
    id?:number;
    collegiateNum:number;
    name:string;
    surname:string;
    secondSurname:string;
    dni:string;

    constructor(collegiateNum:number, name:string, surname:string, secondSurname:string, dni:string,){
      this.collegiateNum = collegiateNum;
      this.name = name;
      this.surname = surname;
      this.secondSurname = secondSurname;
      this.dni = dni;
    }
}
