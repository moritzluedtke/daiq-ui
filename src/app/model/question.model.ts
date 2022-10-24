export class Question {
    constructor(
        public question: string,
        public answers: Record<string, string>,
        public correctAnswer: string
    ) {
    }
}
