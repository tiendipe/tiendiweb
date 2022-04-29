import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

const primengModules = [ButtonModule];

@NgModule({
  imports: [...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
