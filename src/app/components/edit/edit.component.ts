import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RecetaInterface } from '../../models/Receta';
import { RecetaService } from '../../services/receta.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  idReceta: string;
  receta : RecetaInterface = {
      id: '',
      titulo: '',
      descripcion: '',
      ingredientes: '',
      preparacion:'',
      temporada:'',
      fechaPublicacion:'',
      userId: '',
      userNombre:''
  }

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private recetaService: RecetaService
  ) { }

  ngOnInit(): void {
    this.getDetallesReceta();

  }
  getDetallesReceta(){
    this.idReceta = this.route.snapshot.params['id']; // para recibir el parametro de id
    this.recetaService.getOneReceta(this.idReceta).subscribe( receta => this.receta = receta);
  }

  onModificarReceta({value}:{value: RecetaInterface}){
    value.id = this.idReceta;
    this.recetaService.updateReceta(value);
    this.router.navigate(['/details/'+this.idReceta]);
  }

}
