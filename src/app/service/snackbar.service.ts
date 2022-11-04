import { Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
    providedIn: "root",
})
export class SnackbarService {

    private readonly snackbarDurationInMs = 4000

    constructor(private snackbar: MatSnackBar) {
    }

    public openNewVersionSnackbar(message: string, action?: string) {
        return this.snackbar.open(
            message,
            action,
            {
                panelClass: "custom-snack-bar-container",
                horizontalPosition: "end",
                verticalPosition: "top",
                duration: this.snackbarDurationInMs,
            },
        )
    }
}
