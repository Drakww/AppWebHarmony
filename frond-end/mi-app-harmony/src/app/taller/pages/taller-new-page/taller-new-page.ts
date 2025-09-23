import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Taller } from '../../interface/taller.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { TallerService } from '../../service/taller-service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-taller-new-page',
  standalone: false,
  templateUrl: './taller-new-page.html',
  styles: ``
})
export class TallerNewPage implements OnInit {


  public tallerForm = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    nivel: new FormControl(''),
    precio: new FormControl('')
  });

  constructor(
    private tallerService: TallerService,
    private activedRouted: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activedRouted.params
      .pipe(
        switchMap(({ id }) => this.tallerService.getPersonById(id)),
      )
      .subscribe(taller => {
        //sino existe hay que sacarlo
        if (!taller) return this.router.navigateByUrl('/');

        this.tallerForm.reset(taller);
        return;
      })
  }

  getCurrentTaller(): Taller {
    const t = this.tallerForm.value as Taller;
    return t;
  }


  onSubmit(): void {
    // console.log({
    //   formIsValid: this.tallerForm.valid,
    //   value: this.tallerForm.value,
    // });
    if (this.tallerForm.invalid) return;

    if (this.getCurrentTaller().id || this.getCurrentTaller().id > 0) {
      this.tallerService.updateTaller(this.getCurrentTaller()) //para que se dispare o ejecute debe agregar subscribe -> esto por observable
        .subscribe(taller => {
          //mostrar mensaje
          this.showMessage(`${taller.nombre} actualizado correctamente 😎!`)
        })
      return;
    }

    const { id, ...tallerCreate } = this.getCurrentTaller();

    this.tallerService.addTaller(tallerCreate)
      .subscribe(taller => {
        this.tallerService.emitUpdate();
        this.router.navigate(['/dashboard/taller']);
        //mostrar el mensaje y dirigirse a /dashboard/taller
        this.showMessage(`${taller.nombre} created!`);

      });

    this.tallerForm.reset();
  }

  showMessage(message: string) {
    alert(message);
  }


}
