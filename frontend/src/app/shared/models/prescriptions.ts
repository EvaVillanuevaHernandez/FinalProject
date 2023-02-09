import { Doctor } from "./doctors";
import { Patient } from "./patients";

export class Prescriptions {
  id?: number;
  date: Date;
  medicine: string;
  posology: string;
  doctor: Doctor;
  patient: Patient;

  constructor(date:Date, medicine:string, posology:string, doctor_id:Doctor, patient_id:Patient){
    this.date = date;
    this.medicine = medicine;
    this.posology = posology;
    this.doctor = doctor_id;
    this.patient = patient_id;
  }
}
