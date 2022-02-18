import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

const primengModules = [
    InputTextModule,
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
