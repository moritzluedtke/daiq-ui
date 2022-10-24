import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { QuestionComponent } from "./components/question/question.component";

const routes: Routes = [
    {
        path: "admin",
        component: AdminPanelComponent
    },
    {
        path: "**",
        component: QuestionComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
