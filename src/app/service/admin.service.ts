import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "../model/question.model";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: "root",
})
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public getCurrentQuestion(): Observable<Question> {
        return this.http.get<Question>(Constants.ADMIN_URL + "/question");
    }

    public saveQuestion(question: Question) {
        this.http.post<Question>(Constants.ADMIN_URL + "/question", question).subscribe();
    }

    public revealCorrectAnswerToUsers() {
        this.http.post<Question>(Constants.ADMIN_URL + "/reveal-correct-answer", "").subscribe();
    }

}
