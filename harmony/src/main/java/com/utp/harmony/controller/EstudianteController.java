package com.utp.harmony.controller;

import com.utp.harmony.model.Estudiante;
import com.utp.harmony.service.impl.EstudianteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Esto sirve para poder recibir peticiones de tipo http
@RestController
@RequestMapping("/api")  //http://localhost:8080/api/
@CrossOrigin(value = "http://localhost:4200") //Puerto por default de Angular
public class EstudianteController {
    private static final Logger logger = LoggerFactory.getLogger(EstudianteController.class);

    @Autowired
    private EstudianteService estudianteService;

    @GetMapping("/estudiantes") //http://localhost:8080/api/estudiantes
    public List<Estudiante> obtenerEstudiantes(){
        List<Estudiante> estudiantes = this.estudianteService.listarEstudiantes();
        logger.info("estudiantes obtenidos: ");
        estudiantes.forEach(estudiante -> logger.info(estudiante.toString()));
        return estudiantes;
    }

    @PostMapping("/estudiantes")
    public Estudiante crearEstudiante(@RequestBody Estudiante estudiante){
        logger.info("Estudiante agregado: " + estudiante);
        return this.estudianteService.guardarEstudiante(estudiante);
    }
}
