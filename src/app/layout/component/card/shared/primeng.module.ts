import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";

const primengModules = [
    CardModule,
    ButtonModule,
    InputTextModule
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
