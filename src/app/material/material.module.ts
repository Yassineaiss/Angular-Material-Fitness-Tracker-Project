import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



const materials: any[] | Type<any> | ModuleWithProviders<{}>=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule

];

@NgModule({

  imports: [materials],
  exports:[ materials ]
})
export class MaterialModule { }
