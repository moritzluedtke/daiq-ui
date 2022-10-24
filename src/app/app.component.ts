import { Component } from '@angular/core';
import { AppVersionService } from "./service/app-version.service";
import { UsernameService } from "./service/username.service";
import { MatDialog } from "@angular/material/dialog";
import { UsernameDialogComponent } from "./components/username-dialog/username-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    private areSettingsOpened = false;

    constructor(
        public appVersionService: AppVersionService,
        public usernameService: UsernameService,
        public dialog: MatDialog
    ) {
    }

    public openUsernameDialog(firstTime: boolean): void {
        if (!this.areSettingsOpened) {
            this.areSettingsOpened = true;
            const dialogRef = this.dialog.open(UsernameDialogComponent, {
                width: "300px",
                // data: { firstTime },
                disableClose: firstTime,
            });
            dialogRef.afterClosed().subscribe(() => {
                this.areSettingsOpened = false;
            });
        }
    }

}
