import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit  {
  characters : any | undefined ;
  item:any|undefined;

  constructor(private rickservice : RickmortyService){
    
  }

  ngOnInit(){
    if (this.characters==undefined) {
      this.rickservice.setRandomized();
      this.rickservice.retornar()
      .subscribe(result => {
        console.warn(result);
        this.characters = result;
      });
    }
  }

  getImage(item : Object):any | undefined | null{
    console.log(item.hasOwnProperty("image"));
    console.log(this.characters);
  }

  getItemSelect(item:any){
    this.item = item;
  }
}
