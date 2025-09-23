package com.utp.harmony.controller;

import com.utp.harmony.model.Inscripcion;
import com.utp.harmony.service.impl.EstudianteService;
import com.utp.harmony.service.impl.InscripcionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "http://localhost:4200")
public class InscripcionController {
    @Autowired
    private InscripcionService inscripcionService;

    @PostMapping("/inscripcion")
    public ResponseEntity<Inscripcion> inscribir(@RequestBody Inscripcion inscripcion ){
        return ResponseEntity.ok(inscripcionService.inscribirEstudiante(inscripcion));
    }
}
