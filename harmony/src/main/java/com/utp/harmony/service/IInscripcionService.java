package com.utp.harmony.service;

import com.utp.harmony.model.Inscripcion;

import java.util.List;
import java.util.Optional;

public interface IInscripcionService {

    //Crear inscripcio
    Inscripcion inscribirEstudiante(Inscripcion inscripcion);

    //Buscar todas las inscripciones
    List<Inscripcion> listarInscripciones();

    // Buscar inscripcion por Id
    Optional<Inscripcion> inscripcionPorId(Long id);

    //Buscar inscripciones por estudiante
    List<Inscripcion> obtenerPorEstudiante(Long estudianteId);

    //Buscar inscripciones por taller
    List<Inscripcion> obtenerPorTaller(Long tallerId);

    //Eliminar inscripcion
    void eliminarInscripcion(Long id);

}
