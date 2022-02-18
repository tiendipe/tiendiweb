import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AnnouncementModule } from '../component/announcement/announcement.module';
import { InfoModule } from '../component/info/info.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        AnnouncementModule,
        InfoModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }
