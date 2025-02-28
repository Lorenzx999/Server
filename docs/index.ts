import { CardKind, CardType, Card, getDeck } from "./cards.js";

const exercises = new Map<CardKind, string>(
    [
        [ CardKind.Diamonds, "push-ups" ],
        [ CardKind.Clubs,    "burpees"  ],
        [ CardKind.Spades,   "sit-ups"  ],
        [ CardKind.Hearts,   "swimmers" ],
    ]
);

function shuffle(deck: Card[]) {
    for (var i = deck.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]]
    }

}

function main() {
    const deck: Card[] = getDeck();
    console.log(deck);
    shuffle(deck);
    console.log(deck);

    //let i = 0;
    //const card = deck[i];
    //console.log(card);
}

window.onload = main;
