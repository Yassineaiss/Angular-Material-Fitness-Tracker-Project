import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const materials: any[] | Type<any> | ModuleWithProviders<{}> = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
