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
  disablePrev: boolean = true;
  disableNext: boolean = false;

  constructor(private readonly petService: PetService) {
  }

  ngOnInit(): void {
    this.reloadPets()
  }

  reloadPets(pet_page: number = undefined): void {
    this.page = pet_page ? pet_page: this.page;
    this.petService.getPets(this.page, this.maxResults).subscribe(pets => this.pets = pets);
  }

  isPrevDisabled() {
    return this.page == 1;
  }

  isNextDisabled() {
    return this.pets.length < 10;
  }

}
