import { Injectable } from "@angular/core";
import { UsernameService } from "./username.service";
import { HttpClient } from "@angular/common/http";
import { ChosenAnswer } from "../model/chosenAnswer.model";

@Injectable({
    providedIn: 'root'
})
export class AnswerService {

    private readonly apiUrl = "http://localhost:8080/api/answer";

    constructor(
        private http: HttpClient,
        private usernameService: UsernameService) {
    }

    public saveChosenAnswer(answer: string) {
        const chosenAnswer = new ChosenAnswer(answer, this.usernameService.getUsername())
        this.http.post(this.apiUrl, chosenAnswer).subscribe()
    }
}
