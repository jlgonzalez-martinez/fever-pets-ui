import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Pet, PetAdapter} from "@app/modules/pets/models/pet.model";
import {environment} from "@environment/environments";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PetService {

    constructor(public http: HttpClient,
                public petAdapter: PetAdapter) {
    }

    getPets(page: number, max_results: number): Observable<Pet[]> {
        return this.http.get( `${environment.apiUrl}pet/?max_results=${max_results}&page=${page}`)
            .pipe(map((pets: []) =>  {
                return pets.map(pet => this.petAdapter.adapt(pet));
            }))
    }

    getPet(providerName: string, petId: string): Observable<Pet> {
        return this.http.get( `${environment.apiUrl}pet/${providerName}/${petId}`)
            .pipe(map(pet => this.petAdapter.adapt(pet)))
    }
}
