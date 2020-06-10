import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecetaInterface } from '../../models/Receta';
import { RecetaService } from '../../services/receta.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';






@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idReceta: string;
  idUsuariologado: string;
  isOwner: boolean = false;

  receta : RecetaInterface = {

    id: '',
    titulo: '',
    descripcion: '',
    preparacion:'',
    ingredientes: '',
    temporada:'',
    fechaPublicacion:'',
    userId:'',
    userNombre:''
  }

  constructor( private authService: AuthService,
               private recetaService: RecetaService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.onComprobarUserLogin();
    this.onClickDelete();
    this.getDetallesReceta();
  }
  onComprobarUserLogin(){
     this,this.authService.getAuth().subscribe( user => {
       if(user){
         this.idUsuariologado = user.uid;
       }
     });
  }
  getDetallesReceta(){
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe( receta => {
      this.receta = receta;
      if(this.idUsuariologado == this.receta.userId ){
        this.isOwner=true;

      }
    })
  }

  onClickDelete(){
    if(confirm('Estas Seguro?')){
      this.recetaService.deleteReceta(this.receta);
      this.router.navigate(['/']);
    }
  }



}
