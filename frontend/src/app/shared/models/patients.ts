import { SafeResourceUrl } from "@angular/platform-browser";
import { Doctor } from "./doctors";

export class Patient {
id?: number;
dni: string;
history: string;
name: string;
surname: string;
secondSurname: string;
image: SafeResourceUrl;
doctor: Doctor;
typeImg?: string;


constructor(dni: string, history: string, name: string, surname: string, secondSurname: string, image: SafeResourceUrl,doctor_id:Doctor, typeImg: string) {
    this.dni = dni;
    this.history = history;
    this.name = name;
    this.surname = surname;
    this.secondSurname = secondSurname;
    this.image = image;
    this.doctor = doctor_id;
    this.typeImg = typeImg;
}
}