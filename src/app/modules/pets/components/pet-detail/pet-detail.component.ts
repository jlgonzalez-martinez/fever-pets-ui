import { Component, OnInit } from '@angular/core';
import {Pet} from "@app/modules/pets/models/pet.model";
import {Router, ActivatedRoute} from "@angular/router";
import {PetService} from "@app/modules/pets/services/pet.service";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: Pet = undefined;

  constructor(private readonly petService: PetService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadPet(params['id'], params['providerName'])
    });
  }

  loadPet(petId: string, providerName: string): void {
      this.petService.getPet(providerName, petId).subscribe(pet => this.pet = pet);
  }
}
