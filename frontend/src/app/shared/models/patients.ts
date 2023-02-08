import { SafeResourceUrl } from "@angular/platform-browser";

export class Patient {
id?: number;
dni: string;
history: string;
name: string;
surname: string;
secondSurname: string;
image: SafeResourceUrl;
doctor: string;
typeImg?: string;


constructor(dni: string, history: string, name: string, surname: string, secondSurname: string, image: SafeResourceUrl, doctor: string, typeImg: string) {
    this.dni = dni;
    this.history = history;
    this.name = name;
    this.surname = surname;
    this.secondSurname = secondSurname;
    this.image = image;
    this.doctor = doctor;
    this.typeImg = typeImg;
}
}