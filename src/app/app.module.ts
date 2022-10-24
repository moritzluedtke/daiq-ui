import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { QuestionComponent } from "./components/question/question.component";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsernameDialogComponent } from "./components/username-dialog/username-dialog.component";
import { AppRoutingModule } from "./routing.module";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";

@NgModule({
    declarations: [
        AppComponent,
        QuestionComponent,
        UsernameDialogComponent,
        AdminPanelComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
