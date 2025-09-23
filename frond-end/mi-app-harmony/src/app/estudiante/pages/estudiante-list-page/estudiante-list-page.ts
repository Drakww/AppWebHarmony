import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../interface/estudiante.interface';
import { EstudianteService } from '../../services/estudiante-service';

@Component({
  selector: 'app-estudiante-list-page',
  standalone: false,
  templateUrl: './estudiante-list-page.html',
  styles: ``
})
export class EstudianteListPage implements OnInit{
  //declaramos una array vacio de estudiantes
  public estudiantes: Estudiante[] = [];

  //inyectamos la dependencia del servicio
  constructor(private estudianteService: EstudianteService) { }

  //haremos que se cargue la lista de etudiante al iniciar el componente
  ngOnInit(): void {
    //Para que se dispare el metodo, usando subscribe
    this.estudianteService.getEstudiantes().subscribe(estudiante => this.estudiantes = estudiante);
  }
}
