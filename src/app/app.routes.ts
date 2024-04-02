import { Routes } from '@angular/router';

export const routes: Routes = [

    // Ruta por defecto
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    // fin
    {

        path:'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children:[

            {
                path:'chance-detection',
                title:'chance detection',
                loadComponent: () => import('./dashboard/page/chace-detection/chace-detection.component'),
            },

            {
                path:'control-flow',
                title:'control flow',
                loadComponent: () => import('./dashboard/page/control-flow/control-flow.component'),
            },

            {
                path:'defer-options',
                title:'defer options',
                loadComponent: () => import('./dashboard/page/defer-options/defer-options.component'),
            },

            {
                path:'defer-views',
                title:'defer views',
                loadComponent: () => import('./dashboard/page/defer-views/defer-views.component'),
            },

            {
                path:'user/:id',
                title:'user view',
                loadComponent: () => import('./dashboard/page/user/user.component'),
            },

            {
                path:'users',
                title:'users lists',
                loadComponent: () => import('./dashboard/page/users/users.component'),
            },

            {
                path:'views-transition',
                title:'views transition',
                loadComponent: () => import('./dashboard/page/view-transition/view-transition.component'),
            },

            {
                path:'', redirectTo:'control-flow',pathMatch:'full'
                
            },
           
        ]

    }

];
