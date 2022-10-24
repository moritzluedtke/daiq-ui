import { Component } from '@angular/core';
import { AppVersionService } from "./service/app-version.service";
import { UsernameService } from "./service/username.service";
import { UiDialogService } from "./service/ui-dialog.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    constructor(
        public appVersionService: AppVersionService,
        public dialogService: UiDialogService,
        public usernameService: UsernameService,
    ) {
        if (this.usernameService.getUsername() === "") {
            this.dialogService.openUsernameDialog(true);
        }
    }
}
