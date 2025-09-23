import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from '../interface/estudiante.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private httpCliente: HttpClient){ }

  // private estudiantesDePrueba: Estudiante[] = [
  //   { id: 1, nombre: 'Juan Pérez' },
  //   { id: 2, nombre: 'María García' },
  //   { id: 3, nombre: 'Carlos López' }
  // ];

  //retorna todo los estudiantes
  getEstudiantes(): Observable<Estudiante[]> {
    // return of(this.estudiantesDePrueba)
    return this.httpCliente.get<Estudiante[]>(`${this.baseUrl}/estudiantes`);
  }

  //retorna un estudiante por Id
  getEstudianteById(id: number){}

  //registra una persona
  addEstudiante(estudiante: Estudiante){}

  //actualizar un estudiante
  updateEstudiante(estudiante: Estudiante){}

  //eliminar un estudiante por id
  deleteEstudianteId(id: number){}
}
