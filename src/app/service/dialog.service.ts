import { Injectable } from "@angular/core";
import { UsernameDialogComponent } from "../components/username-dialog/username-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private areSettingsOpened = false

    constructor(private dialog: MatDialog) {
    }

    public openUsernameDialog(): void {
        if (!this.areSettingsOpened) {
            this.areSettingsOpened = true;
            const dialogRef = this.dialog.open(UsernameDialogComponent, {
                width: "300px"
            });
            dialogRef.afterClosed().subscribe(() => {
                this.areSettingsOpened = false;
            });
        }
    }
}
