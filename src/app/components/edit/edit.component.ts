import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  idReceta: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.idReceta = this.route.snapshot.params['id']; // para recibir el parametro de id
  }

}
