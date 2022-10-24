import { Injectable } from "@angular/core";
import { Constants } from "../global-constants/constants";

@Injectable({
    providedIn: "root"
})
export class UsernameService {

    private username: string;

    constructor() {
        this.username = "Moritz";

        const username = localStorage.getItem(Constants.USERNAME_STORAGE_KEY);
        this.username = username ? username : "";
    }

    public getUsername(): string {
        return this.username;
    }

    public changeUsername(newUsername: string) {
        this.username = newUsername;
        localStorage.setItem(Constants.USERNAME_STORAGE_KEY, newUsername);
    }

}
