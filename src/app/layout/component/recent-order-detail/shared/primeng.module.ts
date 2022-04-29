import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

const primengModules = [ButtonModule, CardModule, DividerModule];

@NgModule({
  imports: [...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
