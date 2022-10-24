import { Injectable } from "@angular/core";
import { LocalStorageKeys } from "../global-constants/local-storage-keys.model";

@Injectable({
    providedIn: "root"
})
export class UsernameService {

    private username: string;

    constructor() {
        this.username = "Moritz";

        const username = localStorage.getItem(LocalStorageKeys.USERNAME);
        this.username = username ? username : "";
    }

    public getUsername(): string {
        return this.username;
    }

    public changeUsername(newUsername: string) {
        this.username = newUsername;
        localStorage.setItem(LocalStorageKeys.USERNAME, newUsername);
    }

}
