import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/shared/auth.guard';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: 'home', component: HomeComponent, canActivate:[AuthGuard]},

// Lazy Loading
// { path: 'produto',
// loadChildren: () => import('./features/produto/produto.module').then(m => m.ProdutoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
