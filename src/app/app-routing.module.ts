import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './components/foo/foo.component';
import { BarComponent } from './components/bar/bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/foo',
    pathMatch: 'full'
  },
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: 'bar',
    component: BarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
