import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileRouteActivator implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot){
        console.log(this.authService.isAuthenticated());
        if(!this.authService.isAuthenticated()){
            this.router.navigate(['user/login']);
        }
        return this.authService.isAuthenticated();
    }
}