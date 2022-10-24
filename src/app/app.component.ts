import { Component } from '@angular/core';
import { AppVersionService } from "./service/app-version.service";
import { UsernameService } from "./service/username.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    username?: string;

    constructor(
        public appVersionService: AppVersionService,
        private usernameService: UsernameService
    ) {
        this.username = this.usernameService.getUsername()
    }

    public changeUsername() {
        // TODO
    }
}
