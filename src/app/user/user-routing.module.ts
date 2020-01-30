import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent }
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)]
})

export class UserRoutingModule {}