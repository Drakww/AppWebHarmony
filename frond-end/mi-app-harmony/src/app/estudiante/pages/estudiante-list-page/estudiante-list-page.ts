import { Component, OnInit } from '@angular/core';
import { EstudianteResponse } from '../../interface/estudiante.interface';
import { EstudianteService } from '../../services/estudiante-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstudianteNewPage } from '../estudiante-new-page/estudiante-new-page';
import { ConfirmModal } from '../../../shared/components/confirm-modal/confirm-modal';

@Component({
  selector: 'app-estudiante-list-page',
  standalone: false,
  templateUrl: './estudiante-list-page.html',
  styles: ``
})
export class EstudianteListPage implements OnInit{
  //declaramos una array vacio de estudiantes
  public estudiantes: EstudianteResponse[] = [];

  //inyectamos la dependencia del servicio
  constructor(
    private estudianteService: EstudianteService,
    private modalService: NgbModal
  ) { }

  //haremos que se cargue la lista de etudiante al iniciar el componente
  ngOnInit(): void {
    this.cargarDatos();

    //Para que se dispare el metodo, usando subscribe
    this.estudianteService.estudiantesUpdate$.subscribe(() => {
      this.cargarDatos();
    });
  }

  //Abrir modal
  openModal(estudiante?: EstudianteResponse) {
    const modalRef = this.modalService.open(EstudianteNewPage, {size: 'md'});
    modalRef.componentInstance.estudiante = estudiante; //si viene, es edicion

    modalRef.closed.subscribe(result => {
      if(result === 'saved') {
        this.cargarDatos();
      }
    })

  }

  cargarDatos(): void {
    this.estudianteService.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes = estudiantes;
    })
  }

  deleteById(id: number): void {
    const modalRef = this.modalService.open(ConfirmModal, {centered: true});
    modalRef.componentInstance.tittle = 'Eliminar estudiante';
    modalRef.componentInstance.message = '¿Desa eliminar este estudiante?';
    modalRef.componentInstance.confirmText = 'Eliminar';
    modalRef.componentInstance.cancelText = 'Cancelar';

    modalRef.result.then(
      (result) => {
        if(result) {
          this.estudianteService.deleteEstudianteId(id).subscribe(()=> {
            //Aqui falta agregar un eliminado de estudiante  como "alert"
            console.log('Estudiante eliminado');
            this.estudianteService.emitUpdate();
          });
        }
      },
      () => {}
    )
  }
}
