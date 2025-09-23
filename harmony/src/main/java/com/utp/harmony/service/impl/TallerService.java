package com.utp.harmony.service.impl;

import com.utp.harmony.model.Taller;
import com.utp.harmony.repository.TallerRepository;
import com.utp.harmony.service.ITallerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TallerService implements ITallerService {
    @Autowired
    private TallerRepository tallerRepository;

    @Override
    public List<Taller> listarTaller() {
        return this.tallerRepository.findAll();
    }

    @Override
    public Taller buscarTallerPorId(Long idTaller) {
        Taller taller = this.tallerRepository.findById(idTaller).orElse(null);
        return taller;
    }

    @Override
    public Taller guardarTaller(Taller taller) {
        return this.tallerRepository.save(taller);
    }

    @Override
    public void eliminarTallerPorId(Long idTaller) {
        this.tallerRepository.deleteById(idTaller);
    }
}
