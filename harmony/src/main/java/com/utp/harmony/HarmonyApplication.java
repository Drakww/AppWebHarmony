package com.utp.harmony;

import com.utp.harmony.model.Estudiante;
import com.utp.harmony.repository.EstudianteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HarmonyApplication {

	public static void main(String[] args) {
		SpringApplication.run(HarmonyApplication.class, args);
    }
}
