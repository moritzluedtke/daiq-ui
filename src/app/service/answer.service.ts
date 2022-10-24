import { Injectable } from "@angular/core";
import { UsernameService } from "./username.service";
import { HttpClient } from "@angular/common/http";
import { UserAnswer } from "../model/user-answer.model";

@Injectable({
    providedIn: 'root'
})
export class AnswerService {

    private readonly apiUrl = "http://localhost:8080/api/answers";

    constructor(
        private http: HttpClient,
        private usernameService: UsernameService) {
    }

    public saveUserAnswer(answer: string) {
        const userAnswer = new UserAnswer(this.usernameService.getUsername(), answer)
        this.http.post(this.apiUrl, userAnswer).subscribe()
    }
}
