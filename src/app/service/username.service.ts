import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsernameService {

    private username: string = "Moritz"

    constructor() {
    }

    public getUsername(): string {
        return this.username
    }
}
