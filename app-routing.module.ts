import { NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotfound } from './404/404.component';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: './createAcount/createAcount.module#CreateAcountModule'
  },
   {
      path: 'home',
      children: [
        {
           path:'',
           loadChildren: './home/home.module#HomeModule',
           pathMatch: 'full'
        },
        {
          path: 'explore',
          loadChildren: './explore/explore.module#ExploreModule'
        }
      ]
   },
 {
   path: '**',
   component: PageNotfound
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
