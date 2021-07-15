import { NgModule } from '@angular/core';
import {PaginationComponent} from "@app/shared/components/pagination/pagination.component";

@NgModule({
    exports: [
        PaginationComponent
    ],
    declarations: [
        PaginationComponent,
    ]
})
export class SharedModule { }
