import { Component, OnInit } from '@angular/core';
import { UsernameService } from "../../service/username.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-username-dialog',
    templateUrl: './username-dialog.component.html',
    styleUrls: [ './username-dialog.component.scss' ]
})
export class UsernameDialogComponent implements OnInit {
    username: string;

    constructor(
        public usernameService: UsernameService,
        public dialogRef: MatDialogRef<UsernameDialogComponent>) {
        this.username = this.usernameService.getUsername()
    }

    ngOnInit(): void {
    }

    public saveAndClose() {
        this.usernameService.changeUsername(this.username)
        this.dialogRef.close();
    }

    public isAnyInputInvalid(): boolean {
        return !this.username || this.username === ""
    }

}
