import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

const primengModules = [
    CardModule,
    ButtonModule
];

@NgModule({
    imports: [
        ...primengModules
    ],
    exports: [
        ...primengModules
    ],
})

export class PrimengModule {
}
