import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudianteRequest, EstudianteResponse } from '../interface/estudiante.interface';
import { catchError, map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl: string = 'http://localhost:8080/api/estudiantes';

  constructor(private httpCliente: HttpClient){ }

  // private estudiantesDePrueba: Estudiante[] = [
  //   { id: 1, nombre: 'Juan Pérez' },
  //   { id: 2, nombre: 'María García' },
  //   { id: 3, nombre: 'Carlos López' }
  // ];

  private estudianteUpdated = new Subject<void>();
  estudiantesUpdate$ = this.estudianteUpdated.asObservable();

  //retorna todo los estudiantes
  getEstudiantes(): Observable<EstudianteResponse[]> {
    // return of(this.estudiantesDePrueba)
    return this.httpCliente.get<EstudianteResponse[]>(this.baseUrl);
  }

  //registra una persona
  addEstudiante(estudiante: EstudianteRequest): Observable<EstudianteRequest>{
    return this.httpCliente.post<EstudianteRequest>(this.baseUrl, estudiante);
  }
  //retorna un estudiante por Id
  getEstudianteById(id: number): Observable<EstudianteResponse | undefined>{
    return this.httpCliente.get<EstudianteResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(error => of(undefined))
      )
  }

  //actualizar un estudiante
  updateEstudiante(estudiante: EstudianteResponse): Observable<EstudianteResponse>{
    if (!estudiante.id)
      throw Error('Id estudiante es requerido');
    return this.httpCliente.put<EstudianteResponse>(`${this.baseUrl}/${estudiante.id}`, estudiante)
  }

  //eliminar un estudiante por id
  deleteEstudianteId(id: number): Observable<boolean> {
    return this.httpCliente.delete(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(err => of(false)), //controlamos si hay error devolvera false
        map(resp => true), //si todo anda bien devolvera true
      );
  }

  emitUpdate() {
    this.estudianteUpdated.next();
  }
}
