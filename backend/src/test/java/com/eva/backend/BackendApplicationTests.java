package com.eva.backend;


import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.jdbc.Sql;
import com.eva.backend.entity.dao.IDoctorDao;
import com.eva.backend.entity.dao.IPatientDao;
import com.eva.backend.entity.dao.IPrescriptionDao;
import com.eva.backend.entity.models.*;
import com.eva.backend.entity.services.DoctorServiceImpl;
import com.eva.backend.entity.services.PatientServiceImpl;
import com.eva.backend.entity.services.PrescriptionServiceImpl;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.jupiter.api.Assertions;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class BackendApplicationTests {

	@Mock
	private IPrescriptionDao prescriptionDao;
	@Mock
	private IPatientDao patientDao;
	@Mock
	private IDoctorDao doctorDao;
	@InjectMocks
	private PrescriptionServiceImpl prescriptionService;
	@InjectMocks

	private PatientServiceImpl patientService;
	@InjectMocks
	private DoctorServiceImpl doctorService;
	@Test
	public void testGetPrescription() {
		Prescription prescription = new Prescription();
		prescription.setId(1);
		prescription.setPosology("Test Prescription");
		when(prescriptionDao.findById(1)).thenReturn(Optional.of(prescription));
		Prescription result = prescriptionService.get(1);
		assertEquals(1, result.getId());
		assertEquals("Test Prescription", result.getPosology());
	}
	@Test
	public void testGetPatient() {
		Patient patient = new Patient();
		patient.setId(1);
		patient.setDni("Test Patient");
		patient.setName("Test Patient");
		patient.setHistory("Test Patient");
		when(patientDao.findById(1)).thenReturn(Optional.of(patient));
		Patient result = patientService.get(1);
		assertEquals(1, result.getId());
		assertEquals("Test Patient", result.getDni());
		assertEquals("Test Patient", result.getName());
		assertEquals("Test Patient", result.getHistory());
	}


		@Test
		public void testGettersAndSetters() {
			Doctor doctor = new Doctor();
			doctor.setId(1);
			doctor.setCollegiateNum("1234");
			doctor.setName("John");
			doctor.setSurname("Doe");
			doctor.setSecondSurname("Smith");
			doctor.setDni("123456789A");

			List<Prescription> prescriptions = new ArrayList<>();
			prescriptions.add(new Prescription());
			doctor.setPrescriptions(prescriptions);

			List<Prescription> patients = new ArrayList<>();
			patients.add(new Prescription());
			doctor.setPatients(patients);

			User user = new User();
			doctor.setUser(user);

			Assertions.assertEquals(1, doctor.getId());
			Assertions.assertEquals("1234", doctor.getCollegiateNum());
			Assertions.assertEquals("John", doctor.getName());
			Assertions.assertEquals("Doe", doctor.getSurname());
			Assertions.assertEquals("Smith", doctor.getSecondSurname());
			Assertions.assertEquals("123456789A", doctor.getDni());
			Assertions.assertEquals(prescriptions, doctor.getPrescriptions());
			Assertions.assertEquals(patients, doctor.getPatients());
			Assertions.assertEquals(user, doctor.getUser());
		}



		

		@Test
		void test() {
			User user = new User("testUser", "test@example.com", "testPassword");
			assertEquals("testUser", user.getUsername());
			assertEquals("test@example.com", user.getEmail());
			assertEquals("testPassword", user.getPassword());

			Set<Role> roles = new HashSet<>();
			roles.add(new Role());
			user.setRoles(roles);
			assertEquals(1, user.getRoles().size());
		}





	@Test
	public void whenValidId_thenDoctorShouldBeFound() {
		Doctor alex = new Doctor(1, "collegiateNum", "Alex", "Smith", "Doe", "123456789");
		when(doctorDao.findById(1)).thenReturn(java.util.Optional.of(alex));
		Doctor found = doctorService.get(1);

		assertThat(found.getName())
				.isEqualTo(alex.getName());
	}


}

