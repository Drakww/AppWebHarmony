import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante-service';
import { ActivatedRoute, Router } from '@angular/router';

import { EstudianteResponse } from '../../interface/estudiante.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estudiante-new-page',
  standalone: false,
  templateUrl: './estudiante-new-page.html',
})
export class EstudianteNewPage implements OnInit {

  @Input() estudiante?: EstudianteResponse; // si viene, es edición
  isEdit = false;

  public estudianteForm!: FormGroup;

  constructor(
    private estudianteService: EstudianteService,
     public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.isEdit = !!this.estudiante;

    this.estudianteForm = new FormGroup({
      id: new FormControl(this.estudiante?.id || 0),
      nombre: new FormControl(this.estudiante?.nombre || '', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl(this.estudiante?.apellido || '', [Validators.required]),
      edad: new FormControl(this.estudiante?.edad || '', [Validators.required, Validators.min(1)]),
      correo: new FormControl(this.estudiante?.correo || '', [Validators.required, Validators.email]),
      telefono: new FormControl(this.estudiante?.telefono || '', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.invalid) return;


    const formValue: EstudianteResponse = this.estudianteForm.value as EstudianteResponse;

    if (this.isEdit && this.estudiante?.id) {
      // Actualizar
      this.estudianteService.updateEstudiante(formValue).subscribe(() => {
        this.estudianteService.emitUpdate();
        this.activeModal.close('update!');

      });
    } else {
      // Crear
      const {id, ...data} = formValue;
      this.estudianteService.addEstudiante(data).subscribe(() => {
        this.activeModal.close('created'); // 👈 cerramos modal al guardar
        this.estudianteService.emitUpdate();
      });
    }
  }

  onCancel(): void {
    this.activeModal.dismiss('cancel'); // 👈 cerramos modal al cancelar
  }
}

