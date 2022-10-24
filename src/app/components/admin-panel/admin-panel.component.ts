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
    answers: Record<string, string> = {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    }
    correctAnswer: string = "";

    constructor(public questionService: QuestionService) {
        this.questionService.getCurrentQuestion().subscribe(question => {
            if (question) {
                this.question = question.question;
                this.answers["A"] = question.answers["A"];
                this.answers["B"] = question.answers["B"];
                this.answers["C"] = question.answers["C"];
                this.answers["D"] = question.answers["D"];
            }
        });
    }

    ngOnInit(): void {
    }

    public isAnyInputInvalid(): boolean {
        return Util.isEmpty(this.question)
            || Util.isEmpty(this.answers["A"])
            || Util.isEmpty(this.answers["B"])
            || Util.isEmpty(this.answers["C"])
            || Util.isEmpty(this.answers["D"]);
    }

    public saveQuestion() {
        this.questionService.saveQuestion(new Question(
            this.question,
            this.answers,
            "A"
        ));
    }

    public revealCorrectAnswer() {
        // TODO
    }

}
