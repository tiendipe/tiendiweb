import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { SidebarModule } from "primeng/sidebar";

import { ToggleButtonModule } from 'primeng/togglebutton';

import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { StepsModule } from 'primeng/steps';


const primengModules = [
    CardModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    CarouselModule,
    ToastModule,
    SidebarModule,
    OverlayPanelModule,
    StepsModule
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
