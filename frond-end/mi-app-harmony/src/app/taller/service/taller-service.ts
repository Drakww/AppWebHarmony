import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Taller } from '../interface/taller.interface';
import { TallerCreateDto, TallerDto } from '../dto/taller.dto';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  private baseUrl: string = 'http://localhost:8080/api/talleres'

  constructor(private httpCliente: HttpClient) {}

  //retorna todas los talleres
  getTalleres(): Observable<Taller[]> {
    return this.httpCliente.get<Taller[]>(this.baseUrl)
  }

  //agregar un taller
  addTaller(taller: TallerCreateDto): Observable<TallerDto> {
    return this.httpCliente.post<TallerDto>(this.baseUrl, taller);
  }

  //returnar un taller por Id
  getPersonById(id: number): Observable<Taller | undefined> {
    return this.httpCliente.get<Taller>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(error => of(undefined))
      )
  }

  //actualiza un taller
  updateTaller(taller: Taller): Observable<Taller> {
    if(!taller.id)
      throw Error('Id taller es requerido');
    return this.httpCliente.put<Taller>(`${this.baseUrl}/${taller.id}`, taller)
  }

  //elimina un taller por id
  deleteTallerById(id: number): Observable<boolean> {
    return this.httpCliente.delete(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(err => of(false)), //controlamos si hay error devolvera false
        map(resp => true), //si todo anda bien devolvera true
      );
  }
}
