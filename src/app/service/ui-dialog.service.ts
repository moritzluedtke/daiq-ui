import { Injectable } from "@angular/core";
import { UsernameDialogComponent } from "../components/username-dialog/username-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class UiDialogService {
    private areSettingsOpened = false

    constructor(private dialog: MatDialog) {
    }

    public openUsernameDialog(disableClose: boolean = false): void {
        if (!this.areSettingsOpened) {
            this.areSettingsOpened = true;
            const dialogRef = this.dialog.open(UsernameDialogComponent, {
                width: Constants.USERNAME_DIALOG_WIDTH,
                disableClose: disableClose
            });
            dialogRef.afterClosed().subscribe(() => {
                this.areSettingsOpened = false;
            });
        }
    }
}
