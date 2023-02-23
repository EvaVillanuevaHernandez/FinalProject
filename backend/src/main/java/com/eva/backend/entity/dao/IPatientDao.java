package com.eva.backend.entity.dao;


import com.eva.backend.entity.models.ITemplates;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.eva.backend.entity.models.Patient;

import java.util.Optional;

public interface IPatientDao extends CrudRepository<Patient,Integer> {
    @Query(value="SELECT * FROM finalproject.patient  WHERE  Patient.id=:idP",nativeQuery = true)
    Optional<Patient> findById(int idP);

    @Query(value="SELECT p.dni as dni, p.name, pr.medicine as medicine FROM finalproject.patient p join finalproject.prescription pr on p.id = pr.patient_id  WHERE p.dni=:dniP",nativeQuery = true)
    Iterable<ITemplates> findByDni(String dniP);

    @Query(value="SELECT medicine, count(*) as count from finalproject.prescription group by finalproject.prescription.medicine",nativeQuery = true)
    Iterable<ITemplates> avgmedicine();

    @Query(value="SELECT * FROM finalproject.patient WHERE finalproject.patient.id=:idP",nativeQuery = true)
    Iterable<Patient> findByIdPatient(int idP);


    @Query(value="SELECT COUNT(history) FROM finalproject.patient WHERE history=:history",nativeQuery = true)
    Double totalHistory(String history);


}
