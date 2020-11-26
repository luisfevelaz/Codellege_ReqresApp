import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetitionService } from 'src/app/services/petition.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any= {};
  id: number;
  deleted: boolean = false;

  constructor(private aRoute: ActivatedRoute, private peticion: PetitionService) {
    this.aRoute.params.subscribe(params =>{
      console.log(params);
      this.peticion.getSingleUser(params['id']).subscribe(data =>{
        this.usuario = data;
        this.id = this.usuario.id;        
        console.log(this.usuario);
      });
      
    })
  }

  ngOnInit(): void {
  }

  borrar(){
    this.peticion.deleteUser(this.id).subscribe((data:any) =>{
      if(data == null){
        this.deleted = true;
      }
    })
  }

}
