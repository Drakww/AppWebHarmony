import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  standalone: false,
  templateUrl: './confirm-modal.html',
})
export class ConfirmModal {

  @Input() title: string = 'Confirmación';
  @Input() message: string = '¿Estás seguro de continuar?'
  @Input() confirmText: string = 'Aceptar';
  @Input() cancelText: string = 'Cancelar';

  constructor(public activeModal: NgbActiveModal){}
}
