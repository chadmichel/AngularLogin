import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor() { }

    login(email: string, pass: string) {
        return true;
    }
}