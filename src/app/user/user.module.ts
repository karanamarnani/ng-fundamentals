import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { ProfileRouteActivator } from './profile-route-activator.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        ProfileRouteActivator
    ]
})

export class UserModule {}