import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsernameService {

    username: string

    constructor() {
        this.username = "Moritz"

        // Load from Localstorage or show "???"
    }

    public getUsername(): string {
        return this.username
    }

    public changeUsername(newUsername: string) {
        this.username = newUsername
    }
}
