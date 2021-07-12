import {Adapter} from "@app/shared/adapters/adapter";
import {Injectable} from "@angular/core";

export class Pet {

    constructor(
        public id: string,
        public provider: string,
        public name: string,
        public weight: number,
        public height: number,
        public length: number,
        public description: number,
        public photoUrl: string,
        public kind: string,
        public numberOfLives: number
    ) {
    }
}

@Injectable()
export class PetAdapter implements Adapter<Pet> {

    adapt(apiPet: any): Pet {
        console.log(apiPet);
        return new Pet(
            apiPet.id,
            apiPet.provider,
            apiPet.name,
            apiPet.weight,
            apiPet.height,
            apiPet.length,
            apiPet.description,
            apiPet.photo_url,
            apiPet.kind ? apiPet.kind : undefined,
            apiPet.number_of_lives ? apiPet.number_of_lives: undefined
        );
    }
}
