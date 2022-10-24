import { Question } from "../model/question.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private readonly apiUrl = "http://localhost:8080/api/";

    constructor(private http: HttpClient) { }

    public getCurrentQuestion(): Observable<Question> {
        return this.http.get<Question>(this.apiUrl + "question")
    }
}
