import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import {PetRoutingModule} from "@app/modules/pets/pets.route";
import {PetAdapter} from "@app/modules/pets/models/pet.model";
import {PetService} from "@app/modules/pets/services/pet.service";
import {SharedModule} from "@app/shared/shared.module";

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
        SharedModule
    ],
    providers: [
        PetAdapter,
        PetService
    ]
})
export class PetsModule { }
