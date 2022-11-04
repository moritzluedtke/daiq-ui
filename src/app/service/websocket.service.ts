import { Injectable } from "@angular/core";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { RevealMessage } from "../model/reveal-message.model";
import { Constants } from "../constants/constants";

@Injectable({
    providedIn: "root"
})
export class WebsocketService {

    subject = webSocket<RevealMessage>(Constants.REVEAL_ANSWER_WEBSOCKET_URL);

    constructor() {
    }

    public connectToRevealAnswerSocket(): WebSocketSubject<RevealMessage> {
        return this.subject;
    }
}
