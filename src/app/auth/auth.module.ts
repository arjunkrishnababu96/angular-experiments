import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [LoginComponent, LogoutComponent],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }