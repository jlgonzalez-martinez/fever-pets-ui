import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {PetListComponent} from "@app/modules/pets/components/pet-list/pet-list.component";
import {PetDetailComponent} from "@app/modules/pets/components/pet-detail/pet-detail.component";

const routes: Routes = [
    {path: ':providerName/:id', pathMatch: 'full', component: PetDetailComponent},
    {path: '', pathMatch: 'full', component: PetListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetRoutingModule {
}
