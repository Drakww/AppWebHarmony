import { Component, OnInit } from '@angular/core';
import { EstudianteResponse } from '../../interface/estudiante.interface';
import { EstudianteService } from '../../services/estudiante-service';

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
    private estudianteService: EstudianteService
  ) { }

  //haremos que se cargue la lista de etudiante al iniciar el componente
  ngOnInit(): void {
    this.cargarDatos();

    //Para que se dispare el metodo, usando subscribe
    this.estudianteService.estudiantesUpdate$.subscribe(() => {
      this.cargarDatos();
    });
  }

  cargarDatos(): void {
    this.estudianteService.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes = estudiantes;
    })
  }

  deleteById(id: number): void {
    this.estudianteService.deleteEstudianteId(id).subscribe(valor => {
      //mostrar el mensaje y dirigirse a /estudiante/list
      if(confirm("Desea Eliminar!") == true) {
        alert('Estudiante eliminado!');
      }
      this.estudianteService.emitUpdate();
    })

  }

}
