import { HomeComponent } from './page/home/home.component';
import { PayoutComponent } from './page/payout/payout.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'payout',
        component: PayoutComponent,
        title: 'Payout'
    }
    ];

export default routeConfig;