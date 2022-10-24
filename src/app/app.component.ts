import { Component } from '@angular/core';
import { AppVersionService } from "./service/app-version.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public appVersionService: AppVersionService) {
    }
}
