import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from 'src/app/service/tarea.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  constructor(private tareaService: TareaService) { }
lista:any=[];
  ngOnInit(): void {
   this.listarTareas();
  }

  listarTareas(){
    this.tareaService.getTareas().subscribe(
      res=>{this.lista=res},
      err=> console.log(err)
    );
  }

  eliminar(id: string) 
  {
    this.tareaService.deleteTarea(id).subscribe(
      () => {
        this.lista = this.lista.filter((tarea: Tarea) => tarea.id !== id);
        console.log(id);
      },
      err => console.log(err)
    );
  }
  
  
}
