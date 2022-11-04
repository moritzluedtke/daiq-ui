import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../../service/question.service";
import { Question } from "../../model/question.model";
import { AnswerService } from "../../service/answer.service";
import { Constants } from "../../constants/constants";
import { WebsocketService } from "../../service/websocket.service";

@Component({
    selector: "app-question",
    templateUrl: "./question.component.html",
    styleUrls: [ "./question.component.scss" ],
})
export class QuestionComponent implements OnInit {
    readonly correctAnswerColorCss = Constants.CORRECT_COLOR;
    readonly styles = {
        cardWidth: Constants.MAT_CARD_WIDTH,
        answerAColor: "none",
        answerBColor: "none",
        answerCColor: "none",
        answerDColor: "none",
    };

    question?: Question;
    userAnswer?: string;
    stopAnswering = false;

    constructor(
        private questionService: QuestionService,
        private websocketService: WebsocketService,
        public answerService: AnswerService,
    ) {
        this.websocketService.connectToRevealAnswerSocket().subscribe(
            data => {
                if (data.revealAnswer) {
                    this.revealCorrectAnswer(data.correctAnswer);
                }
            });
    }

    ngOnInit(): void {
        this.questionService.getCurrentQuestion().subscribe(question => {
            this.question = question;
        });
    }

    public revealCorrectAnswer(correctAnswer: string) {
        this.stopAnswering = true;

        switch (correctAnswer) {
            case "A":
                this.styles.answerAColor = this.correctAnswerColorCss;
                break;
            case "B":
                this.styles.answerBColor = this.correctAnswerColorCss;
                break;
            case "C":
                this.styles.answerCColor = this.correctAnswerColorCss;
                break;
            case "D":
                this.styles.answerDColor = this.correctAnswerColorCss;
                break;
        }
    }
}
