package com.utp.harmony.service;

import com.utp.harmony.model.Taller;

import java.util.List;

public interface ITallerService {
    //Listar talleres
    List<Taller> listarTaller();

    //Buscar talleres
    Taller buscarTallerPorId(Long idTaller);

    //Guardar taller
    Taller guardarTaller(Taller taller);

    //Eliminar taller
    void eliminarTallerPorId(Long idTaller);
}
