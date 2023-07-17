import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  id:string|null="";
  item:any;

  constructor(private route:ActivatedRoute, private rickservice : RickmortyService){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!=""){
      this.rickservice.getItem(this.id!)
        .subscribe(result => {
          console.warn(result);
          this.item = result;
        });
    }
  }
  
}
