package com.utp.harmony.service.impl;

import com.utp.harmony.model.Inscripcion;
import com.utp.harmony.repository.InscripcionRepository;
import com.utp.harmony.service.IInscripcionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InscripcionService implements IInscripcionService {
    @Autowired
    private InscripcionRepository inscripcionRepository;

    @Override
    public Inscripcion inscribirEstudiante(Inscripcion inscripcion) {
        return this.inscripcionRepository.save(inscripcion);
    }

    @Override
    public List<Inscripcion> listarInscripciones() {
        return this.inscripcionRepository.findAll();
    }

    @Override
    public Optional<Inscripcion> inscripcionPorId(Long id) {
        return this.inscripcionRepository.findById(id);
    }

    @Override
    public List<Inscripcion> obtenerPorEstudiante(Long estudianteId) {
        return this.inscripcionRepository.findByEstudianteId(estudianteId);
    }

    @Override
    public List<Inscripcion> obtenerPorTaller(Long tallerId) {
        return this.inscripcionRepository.findByTallerId(tallerId);
    }

    @Override
    public void eliminarInscripcion(Long id) {
        this.inscripcionRepository.deleteById(id);
    }
}
