# DaiqUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Steps

1. Admin Panel, wo man aufdecken kann
2. Spieler Ui hat Webhook und wird von der Admin UI über den Server getriggert?
3. Admin Panel, wo man sieht, wer was geantwortet hat (live, via Webhook?)
4. (optional) Spieler sehen, wenn aufgedeckt wird, wer was geantwortet hat

## Ideas

- Show all users when admin logs in
- Refactor backend code?
- Snackbar, which announces the winners
- Questions can contain images from the web (they show the content in a link, so a direct link to the image in the web
  should be the input)
- (optional) When "reveal" is pressed all answers from the other participants are shown as tags/chips on the answers? 

## Known issues

- One can enter an empty username if they clear the input and then exit the dialog via the `escape` key
- One can enter an empty answer in the admin panel by providing a whitespace
