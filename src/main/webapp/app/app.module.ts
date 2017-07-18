import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TestJhipsterOnlineSharedModule, UserRouteAccessService } from './shared';
import { TestJhipsterOnlineHomeModule } from './home/home.module';
import { TestJhipsterOnlineAdminModule } from './admin/admin.module';
import { TestJhipsterOnlineAccountModule } from './account/account.module';
import { TestJhipsterOnlineEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestJhipsterOnlineSharedModule,
        TestJhipsterOnlineHomeModule,
        TestJhipsterOnlineAdminModule,
        TestJhipsterOnlineAccountModule,
        TestJhipsterOnlineEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestJhipsterOnlineAppModule {}
