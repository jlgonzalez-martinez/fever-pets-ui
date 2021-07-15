import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pet} from "@app/modules/pets/models/pet.model";
import {PetService} from "@app/modules/pets/services/pet.service";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  page: number = 1;
  maxResults: number = 10;

  constructor(private readonly petService: PetService) {
  }

  ngOnInit(): void {
    this.reloadPets()
  }

  reloadPets(): void {
    this.petService.getPets(this.page, this.maxResults).subscribe(pets => this.pets = pets);
  }
}
