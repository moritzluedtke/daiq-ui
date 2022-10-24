import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../../service/question.service";
import { Question } from "../../model/question.model";
import { AnswerService } from "../../service/answer.service";
import { Constants } from "../../constants/constants";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.scss' ]
})
export class QuestionComponent implements OnInit {
    readonly correctAnswerColorCss = Constants.CORRECT_COLOR;
    readonly styles = {
        cardWidth: Constants.MAT_CARD_WIDTH,
        answerAColor: "none",
        answerBColor: "none",
        answerCColor: "none",
        answerDColor: "none"
    }

    question?: Question;
    userAnswer?: string;
    stopAnswering = false;

    constructor(
        private questionService: QuestionService,
        public answerService: AnswerService
    ) {
    }

    ngOnInit(): void {
        this.questionService.getCurrentQuestion().subscribe(question => {
            this.question = question
        })
    }

    public revealCorrectAnswer() {
        this.stopAnswering = true

        switch (this.question?.correctAnswer) {
            case "A":
                this.styles.answerAColor = this.correctAnswerColorCss
                break;
            case "B":
                this.styles.answerBColor = this.correctAnswerColorCss
                break;
            case "C":
                this.styles.answerCColor = this.correctAnswerColorCss
                break;
            case "D":
                this.styles.answerDColor = this.correctAnswerColorCss
                break;
        }
    }
}
