package com.eva.backend;

import com.eva.backend.entity.models.Doctor;
import com.eva.backend.entity.services.DoctorServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

	@Autowired
	private MockMvc mvc;

	@MockBean
	private DoctorServiceImpl doctorService;

	@Test
	void testGetData() throws Exception {
		this.mvc.perform(get("/doctors"))
				.andExpect(status().isOk());
	}

	@Test
	void testDeleteSpeaker() throws Exception {
		int id = 1;
		doNothing().when(doctorService).delete(id);

		this.mvc.perform(delete("/doctors/{id}", id))
				.andExpect(status().isOk());
	}

	@Test
	void testPostSpeaker() throws Exception {
		Doctor doctor = new Doctor();
		doctor.setId(1);
		doctor.setName("Doctor");
		doctor.setSurname("Ejemplo");
		doctor.setSecondSurname("Uno");
		doctor.setDni("453392J");
		doctor.setCollegiateNum("1-2-2");

		doNothing().when(doctorService).post(doctor);

		this.mvc.perform(post("/doctors"))
				.andExpect(status().isOk());
	}

}
