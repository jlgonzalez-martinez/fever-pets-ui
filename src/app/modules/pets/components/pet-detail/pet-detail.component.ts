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
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadPet(params['id'], params['providerName'])
    });
  }

  loadPet(providerName: string, petId: string): void {
      this.petService.getPet(providerName, petId).subscribe(pet => this.pet = pet);
  }

  goToList() {
    this.router.navigateByUrl('pets')
  }
}
