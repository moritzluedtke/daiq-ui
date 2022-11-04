import { Question } from "../model/question.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: "root"
})
export class QuestionService {

    constructor(private http: HttpClient) {
    }

    public getCurrentQuestion(): Observable<Question> {
        return this.http.get<Question>(Constants.API_URL + "/question");
    }

}
