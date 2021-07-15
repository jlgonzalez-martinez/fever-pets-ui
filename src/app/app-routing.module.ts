import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full' , redirectTo: 'pets' },
    { path: 'pets' , loadChildren: () => import('./modules/pets/pets.module').then(m => m.PetsModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
