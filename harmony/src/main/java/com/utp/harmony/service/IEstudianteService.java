package com.utp.harmony.service;

import com.utp.harmony.model.Estudiante;

import java.util.List;

public interface IEstudianteService {
    //ListarEstudiantes
    List<Estudiante> listarEstudiantes();

    //Buscar Estudiante
    Estudiante buscarEstudiantePorId(Long idEstudiante);

    //Guardar Estudiante
    Estudiante guardarEstudiante(Estudiante estudiante);

    //Eliminar Estudiante
    void eliminarEstudiantePorId(Long idEstudiante);
}
