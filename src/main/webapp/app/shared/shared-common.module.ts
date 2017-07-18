import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    TestJhipsterOnlineSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        TestJhipsterOnlineSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        TestJhipsterOnlineSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class TestJhipsterOnlineSharedCommonModule {}
