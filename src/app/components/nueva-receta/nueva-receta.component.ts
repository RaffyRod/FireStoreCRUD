import { Component, OnInit } from '@angular/core';
import { RecetaInterface } from '../../models/Receta';
import { AuthService } from '../../services/auth.service';
import { RecetaService } from '../../services/receta.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit {

  receta: RecetaInterface = {
        id:'',
        titulo:'',
        descripcion:'',
        preparacion:'',
        ingredientes:'',
        temporada:'',
        fechaPublicacion: '',
        userId:'',
        userNombre:''


  }

  constructor( private authService: AuthService,
               private recetaService: RecetaService,
               private router: Router) { }

  ngOnInit(): void {
  }

  onGuardarReceta({value}: {value: RecetaInterface}){
    value.fechaPublicacion = (new Date()).getTime();
    this.authService.getAuth().subscribe( user => {
      value.userId = user.uid;
      value.userNombre = user.displayName;
      this.recetaService.addNewReceta(value);

    });
    this.router.navigate(['/']);
  }

}
