import { NgModule } from '@angular/core';

import { GamesComponent } from 'app/component/main/games.component';
import { GamesRoutingModule } from 'app/config/games-routing.module';

// import { DashboardModule } from './dashboard/dashboard.module';
// import { PagesRoutingModule } from './pages-routing.module';
// import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
    GamesComponent,
];

@NgModule({
    imports: [
        GamesRoutingModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS,
    ],
})
export class GamesModule {
}