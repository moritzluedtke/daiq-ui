import { Injectable } from "@angular/core";
import { UsernameService } from "./username.service";
import { HttpClient } from "@angular/common/http";
import { UserAnswer } from "../model/user-answer.model";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: "root",
})
export class AnswerService {

    constructor(
        private http: HttpClient,
        private usernameService: UsernameService) {
    }

    public saveUserAnswer(answer: string) {
        const userAnswer = new UserAnswer(this.usernameService.getUsername(), answer);
        this.http.post(Constants.API_URL + "/answers", userAnswer).subscribe();
    }
}
