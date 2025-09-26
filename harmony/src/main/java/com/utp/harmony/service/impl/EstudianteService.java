package com.utp.harmony.service.impl;

import com.utp.harmony.model.Estudiante;
import com.utp.harmony.repository.EstudianteRepository;
import com.utp.harmony.service.IEstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteService implements IEstudianteService {

    @Autowired
    private EstudianteRepository estudianteRepository;


    @Override
    public List<Estudiante> listarEstudiantes() {
        return this.estudianteRepository.findAllByOrderByIdAsc();
    }

    @Override
    public Estudiante buscarEstudiantePorId(Long idEstudiante) {
        Estudiante estudiante = this.estudianteRepository.findById(idEstudiante).orElse(null);
        return estudiante;
    }

    @Override
    public Estudiante guardarEstudiante(Estudiante estudiante) {
        return this.estudianteRepository.save(estudiante);
    }

    @Override
    public void eliminarEstudiantePorId(Long idEstudiante) {
        this.estudianteRepository.deleteById(idEstudiante);
    }
}
