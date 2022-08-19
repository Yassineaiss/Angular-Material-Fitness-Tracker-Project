import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


const materials: any[] | Type<any> | ModuleWithProviders<{}>=[
  MatButtonModule,
];

@NgModule({

  imports: [materials],
  exports:[ materials ]
})
export class MaterialModule { }
