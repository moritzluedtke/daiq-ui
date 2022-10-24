import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../../service/question.service";
import { Question } from "../../model/question.model";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.scss' ]
})
export class QuestionComponent implements OnInit {
    readonly correctAnswerColorCss = "rgb(0,220,80)";
    readonly styles = {
        cardWidth: "650px",
        answerAColor: "none",
        answerBColor: "none",
        answerCColor: "none",
        answerDColor: "none"
    }

    question?: Question;
    chosenAnswer?: string;
    stopAnswering = false;

    constructor(private questionService: QuestionService) {
    }

    ngOnInit(): void {
        this.questionService.getCurrentQuestion().subscribe(question => {
            this.question = question
            console.log(this.question)
        })
    }

    public revealCorrectAnswer() {
        this.styles.answerAColor = this.correctAnswerColorCss
        console.log(this.chosenAnswer)
        this.stopAnswering = true
    }

}
