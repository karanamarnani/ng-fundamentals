import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { ProfileRouteActivator } from './profile-route-activator.service';

const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivator] },
    { path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)]
})

export class UserRoutingModule {}