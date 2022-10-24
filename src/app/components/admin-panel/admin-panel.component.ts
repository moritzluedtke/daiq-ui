import { Component, OnInit } from "@angular/core";
import { Constants } from "../../global-constants/constants";
import { QuestionService } from "../../service/question.service";

@Component({
    selector: "app-admin-panel",
    templateUrl: "./admin-panel.component.html",
    styleUrls: [ "./admin-panel.component.scss" ],
})
export class AdminPanelComponent implements OnInit {
    readonly styles = {
        cardWidth: Constants.MAT_CARD_WIDTH,
        revealColor: Constants.CORRECT_COLOR
    };

    question?: string;
    answerA?: string;
    answerB?: string;
    answerC?: string;
    answerD?: string;

    constructor(private questionService: QuestionService) {
        this.questionService.getCurrentQuestion().subscribe(question => {
            if (question) {
                this.question = question.question;
                this.answerA = question.answers["A"];
                this.answerB = question.answers["B"];
                this.answerC = question.answers["C"];
                this.answerD = question.answers["D"];
            }
        });
    }

    ngOnInit(): void {
    }

    public revealCorrectAnswer() {
        // TODO
    }

}
