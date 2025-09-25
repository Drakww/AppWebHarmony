package com.utp.harmony.controller;

import com.utp.harmony.excepcion.RecursoNoEncontradoExcepcion;
import com.utp.harmony.model.Estudiante;
import com.utp.harmony.service.impl.EstudianteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/estudiantes/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiantePorId(
            @PathVariable long id
    ) {
        Estudiante estudiante = this.estudianteService.buscarEstudiantePorId(id);
        if(estudiante != null){
            return ResponseEntity.ok(estudiante);
        } else {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id: " + id);
        }

    }
    @PutMapping("/estudiantes/{id}")
    public ResponseEntity<Estudiante> actualizarEstudiante(
            @PathVariable long id,
            @RequestBody Estudiante estudianteRecibido
    ){
        Estudiante estudiante = this.estudianteService.buscarEstudiantePorId(id);
        estudiante.setNombre(estudianteRecibido.getNombre());
        estudiante.setApellido(estudianteRecibido.getApellido());
        estudiante.setEdad(estudianteRecibido.getEdad());
        estudiante.setCorreo(estudianteRecibido.getCorreo());
        estudiante.setTelefono(estudianteRecibido.getTelefono());

        //Guardamos la informacion
        this.estudianteService.guardarEstudiante(estudiante);
        return ResponseEntity.ok(estudiante);

    }

    @DeleteMapping("/estudiantes/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarTaller (@PathVariable long id){
        Estudiante estudiante = this.estudianteService.buscarEstudiantePorId(id);
        if(estudiante == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id: " + id);
        }
        this.estudianteService.eliminarEstudiantePorId(estudiante.getId());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
