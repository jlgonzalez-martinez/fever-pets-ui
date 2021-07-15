import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import {PetRoutingModule} from "@app/modules/pets/pets.route";
import {PetAdapter} from "@app/modules/pets/models/pet.model";

@NgModule({
    declarations: [
    PetDetailComponent,
    PetListComponent
  ],
    exports: [],
    imports: [
        PetRoutingModule,
        CommonModule,
        RouterModule,
    ],
    providers: [
        PetAdapter
    ]
})
export class PetsModule { }
