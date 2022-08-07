import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';

const primengModules = [SelectButtonModule, ButtonModule, CardModule];

@NgModule({
  imports: [...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
