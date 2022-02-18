import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        ToggleButtonModule,
        InputTextModule,
        ButtonModule,
        ChipModule,
        CardModule,
        SidebarModule,
        OverlayPanelModule,
        TooltipModule,
        DividerModule,
        TabMenuModule,
        StepsModule,
        CarouselModule,
        BreadcrumbModule,
        CascadeSelectModule,
        SlideMenuModule,
        DropdownModule,
        GalleriaModule,
        ProgressBarModule,
        CheckboxModule,
        ToolbarModule,
        BadgeModule,
        ToastModule
    ]
})
export class PrimengModule { }
