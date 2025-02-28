import { CardKind, CardType } from "./cards.js";
const exercises = new Map([
    [CardKind.Diamonds, "push-ups"],
    [CardKind.Clubs, "burpees"],
    [CardKind.Spades, "sit-ups"],
    [CardKind.Hearts, "swimmers"],
]);
function shuffle(deck) {
    deck[0] = {
        kind: CardKind.Clubs,
        type: CardType.Ace,
        icon: "FOO",
    };
    //for (let i = deck.length - 1; i > 0; i--) {
    //    const rand = Math.floor(Math.random() * (i + 1));
    //    [deck[i], deck[rand]] = [deck[rand], deck[i]];
    //}
}
function modify(xs) {
    xs[0] = 123;
}
function main() {
    const xs = [1, 2, 3];
    console.log(xs);
    console.log(xs[0]);
    modify(xs);
    console.log(xs);
    console.log(xs[0]);
    //const deck: Card[] = getDeck();
    //console.log(deck);
    //shuffle(deck);
    //console.log(deck);
    //let i = 0;
    //const card = deck[i];
    //console.log(card);
}
window.onload = main;
