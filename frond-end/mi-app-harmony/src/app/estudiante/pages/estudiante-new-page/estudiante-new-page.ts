import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante-service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EstudianteResponse } from '../../interface/estudiante.interface';

@Component({
  selector: 'app-estudiante-new-page',
  standalone: false,
  templateUrl: './estudiante-new-page.html',
  styles: ``
})
export class EstudianteNewPage implements OnInit{

  public estudianteForm = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl('')
  });

  constructor(
    private estudianteService: EstudianteService,
    private activedRouted: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activedRouted.params
    .pipe(
      switchMap(({ id }) => this.estudianteService.getEstudianteById(id)),
    )
    .subscribe(estudiante => {
      //si no existe hay que sacarlo
      if(!estudiante) return this.router.navigateByUrl('/');

      this.estudianteForm.reset(estudiante);
      return;
    })
  }

  getCurrentEstudiante(): EstudianteResponse {
    const e = this.estudianteForm.value as EstudianteResponse;
    return e;
  }

  onSubmit(): void {
    //console.log({
    //  formIsValid: this.estudianteForm.valid,
    //  value: this.estudianteForm.value,
    //});
    if(this.estudianteForm.invalid) return;

    if(this.getCurrentEstudiante().id || this.getCurrentEstudiante().id > 0) {
      this.estudianteService.updateEstudiante(this.getCurrentEstudiante())
      .subscribe(estudiante => {
        //mostrar mensaje
        this.estudianteService.emitUpdate();
        this.router.navigate(['/dashboard/estudiantes']);
        this.showMessage(`${estudiante.nombre} actualizado correctamente 😎!` )
      })
      return;
    }

    const {id, ...estudianteCreate} = this.getCurrentEstudiante();

    this.estudianteService.addEstudiante(estudianteCreate)
      .subscribe(estudiante => {
        this.estudianteService.emitUpdate();
        this.router.navigate(['/dashboard/estudiantes']);
        //mostrar el mensaje y dirigirse a /dashboard/estudiantes
        this.showMessage(`${estudiante.nombre} created!`);
      });
      this.estudianteForm.reset();
  }

  showMessage(message: string) {
    alert(message);
  }

}
