import { Component } from '@angular/core';
import { AppVersionService } from "./service/app-version.service";
import { UsernameService } from "./service/username.service";
import { DialogService } from "./service/dialog.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    constructor(
        public appVersionService: AppVersionService,
        public dialogService: DialogService,
        public usernameService: UsernameService,
    ) {
        if (this.usernameService.getUsername() === "") {
            this.dialogService.openUsernameDialog();
        }
    }

}
