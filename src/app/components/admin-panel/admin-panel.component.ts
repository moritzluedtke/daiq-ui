import { Component, OnInit } from "@angular/core";
import { Constants } from "../../constants/constants";
import { Question } from "../../model/question.model";
import { Util } from "../../util/util";
import { SnackbarService } from "../../service/snackbar.service";
import { AdminService } from "../../service/admin.service";
import { WebsocketService } from "../../service/websocket.service";

@Component({
    selector: "app-admin-panel",
    templateUrl: "./admin-panel.component.html",
    styleUrls: [ "./admin-panel.component.scss" ],
})
export class AdminPanelComponent implements OnInit {
    readonly styles = {
        createQuestionCardWidth: Constants.MAT_CARD_MEDIUM_WIDTH,
        playerListCardWidth: Constants.MAT_CARD_SMALL_WIDTH,
        revealColor: Constants.CORRECT_COLOR,
    };

    userAnswers: Record<string, string> = {};
    question: string = "";
    answers: Record<string, string> = {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
    };
    correctAnswer: string = "";

    constructor(
        private snackbarService: SnackbarService,
        private adminService: AdminService,
        private websocketService: WebsocketService,
    ) {
        this.loadCurrentQuestion();
        this.loadUserAnswers();
        this.connectToWebsocket();
    }

    ngOnInit(): void {
    }

    private loadCurrentQuestion() {
        this.adminService.getCurrentQuestion().subscribe(question => {
            if (question) {
                this.question = question.question;
                this.answers["A"] = question.answers["A"];
                this.answers["B"] = question.answers["B"];
                this.answers["C"] = question.answers["C"];
                this.answers["D"] = question.answers["D"];

                this.correctAnswer = question.correctAnswer;
            }
        });
    }

    private connectToWebsocket() {
        this.websocketService.connectToAnswersSocket().subscribe(newAnswerList => {
                this.userAnswers = newAnswerList;
            },
        );
    }

    private loadUserAnswers() {
        this.adminService.getUserAnswers().subscribe(userAnswers => {
            userAnswers.forEach(userAnswer => {
                this.userAnswers[userAnswer.username] = userAnswer.chosenAnswer;
            });
        });
    }

    public isAnyInputInvalid(): boolean {
        return Util.isEmpty(this.question)
            || Util.isEmpty(this.answers["A"])
            || Util.isEmpty(this.answers["B"])
            || Util.isEmpty(this.answers["C"])
            || Util.isEmpty(this.answers["D"])
            || Util.isEmpty(this.correctAnswer);
    }

    public saveQuestion() {
        this.adminService.saveQuestion(new Question(
            this.question,
            this.answers,
            this.correctAnswer,
        ));
        this.snackbarService.openSnackbar("Question saved");
    }

    public revealCorrectAnswer() {
        this.adminService.revealCorrectAnswerToUsers();
        this.snackbarService.openSnackbar("The correct answer has been revealed to the users");
    }

    public trackByIndex(index: any, item: any) {
        return index;
    }
}
