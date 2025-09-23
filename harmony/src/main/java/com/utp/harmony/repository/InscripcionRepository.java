package com.utp.harmony.repository;

import com.utp.harmony.model.Inscripcion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InscripcionRepository extends JpaRepository<Inscripcion, Long> {

    // Buscar todas las inscripciones de un estudiante
    List<Inscripcion> findByEstudianteId(Long estudianteId);

    //Buscar todas las inscripciones de un taller
    List<Inscripcion> findByTallerId(Long tallerId);
}
