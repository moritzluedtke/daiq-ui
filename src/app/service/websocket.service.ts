import { Injectable } from "@angular/core";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { RevealAnswerDto } from "../model/reveal-answer-dto.model";
import { Constants } from "../constants/constants";
import { UserAnswer } from "../model/user-answer.model";

@Injectable({
    providedIn: "root",
})
export class WebsocketService {

    revealAnswerSocket = webSocket<RevealAnswerDto>(Constants.REVEAL_ANSWER_WEBSOCKET_URL);
    answersSocket = webSocket<Record<string, string>>(Constants.ANSWERS_WEBSOCKET_URL);

    constructor() {
    }

    public connectToRevealAnswerSocket(): WebSocketSubject<RevealAnswerDto> {
        return this.revealAnswerSocket;
    }

    public connectToAnswersSocket(): WebSocketSubject<Record<string, string>> {
        return this.answersSocket;
    }
}
