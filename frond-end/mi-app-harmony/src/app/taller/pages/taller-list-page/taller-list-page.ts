import { Component, OnInit } from '@angular/core';
import { Taller } from '../../interface/taller.interface';
import { TallerService } from '../../service/taller-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taller-list-page',
  standalone: false,
  templateUrl: './taller-list-page.html',
  styles: ``
})
export class TallerListPage implements OnInit{
  //declaramos un array vacio para talleres
  public talleres: Taller[] = [];



  //inyectamos la dependecia del servicio
  constructor(
    private tallerService: TallerService,
    private router: Router
  ) {}

  //Haremos que se encargue de la lista de talleres al iniciar el componente
  ngOnInit(): void {
    //para que se dispare el metodo, usamos subscribe
    this.tallerService.getTalleres().subscribe(taller => this.talleres = taller);
  }

  deleteById(id: number): void {
    this.tallerService.deleteTallerById(id).subscribe(valor => {
      //mostrar el mensaje y dirigirse a /taller/list
      this.router.navigate(['/taller/list']);
      if(confirm("Desea Eliminar!") == true){
        alert('Taller eliminado!')
      }
    })
  }



}
