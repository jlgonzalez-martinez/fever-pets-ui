import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      // PetAdapter
  ]
})
export class AdapterModule {
  constructor( @Optional() @SkipSelf() adapterModule: AdapterModule) {
    if (adapterModule) {
      throw new Error('AdapterModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
