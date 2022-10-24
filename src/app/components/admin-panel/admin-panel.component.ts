import { Component, OnInit } from "@angular/core";
import { Constants } from "../../constants/constants";
import { QuestionService } from "../../service/question.service";
import { Question } from "../../model/question.model";
import { Util } from "../../util/util";

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

    question: string = "";
    answerA: string = "";
    answerB: string = "";
    answerC: string = "";
    answerD: string = "";

    constructor(public questionService: QuestionService) {
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

    public isAnyInputInvalid(): boolean {
        return Util.isEmpty(this.question)
            || Util.isEmpty(this.answerA)
            || Util.isEmpty(this.answerB)
            || Util.isEmpty(this.answerC)
            || Util.isEmpty(this.answerD);
    }

    public saveQuestion() {
        this.questionService.saveQuestion(new Question(
            this.question,
            {
                "A": this.answerA,
                "B": this.answerB,
                "C": this.answerC,
                "D": this.answerD,
            },
            "A"
        ));
    }

    public revealCorrectAnswer() {
        // TODO
    }

}
