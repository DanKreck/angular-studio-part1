import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Food containers", "Oxygen tanks"];

  constructor() { }

  ngOnInit(): void {
  }

  addEquipment(newPiece: string){
    this.equipment.push(newPiece);

  }

}
