package com.utp.harmony.controller;

import com.utp.harmony.excepcion.RecursoNoEncontradoExcepcion;
import com.utp.harmony.model.Taller;
import com.utp.harmony.service.impl.TallerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @PutMapping("/talleres/{id}")
    public ResponseEntity<Taller> actualizarProducto(
            @PathVariable long id,
            @RequestBody Taller tallerRecibido
    ){
        Taller taller = this.tallerService.buscarTallerPorId(id);
        taller.setNombre(tallerRecibido.getNombre());
        taller.setDescripcion(tallerRecibido.getDescripcion());
        taller.setNivel(tallerRecibido.getNivel());
        taller.setPrecio(tallerRecibido.getPrecio());

        //Guardamos la informacion
        this.tallerService.guardarTaller(taller);
        return ResponseEntity.ok(taller);
    }

    @DeleteMapping("/talleres/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarTaller (@PathVariable long id){
        Taller taller = this.tallerService.buscarTallerPorId(id);
        if(taller == null) {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id: " + id);
        }
        this.tallerService.eliminarTallerPorId(taller.getId());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
