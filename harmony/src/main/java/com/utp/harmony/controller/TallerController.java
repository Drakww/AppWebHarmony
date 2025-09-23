package com.utp.harmony.controller;

import com.utp.harmony.excepcion.RecursoNoEncontradoExcepcion;
import com.utp.harmony.model.Taller;
import com.utp.harmony.service.impl.TallerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")//http://localhost:8080/api/
@CrossOrigin(value = "http://localhost:4200")
public class TallerController {
    private static final Logger logger = LoggerFactory.getLogger(EstudianteController.class);

    @Autowired
    private TallerService tallerService;

    @GetMapping("/talleres")
    public List<Taller> obtenerTalleres(){
        List<Taller> tallers = this.tallerService.listarTaller();
        logger.info("talleres obtenidos: ");
        tallers.forEach(taller -> logger.info(taller.toString()));
        return tallers;
    }

    @PostMapping("/talleres")
    public Taller crearTaller(@RequestBody Taller taller) {
        logger.info("Taller agregado: " + taller);
        return this.tallerService.guardarTaller(taller);
    }

    @GetMapping("/talleres/{id}")
    public ResponseEntity<Taller> obtenerTallerPorId(
            @PathVariable long id
    ){
        Taller taller = this.tallerService.buscarTallerPorId(id);
        if(taller != null) {
            return ResponseEntity.ok(taller);
        }else {
            throw new RecursoNoEncontradoExcepcion("No se encontró el id: " + id);
        }
    }
}
