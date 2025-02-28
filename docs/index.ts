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

function main() {
    const deck: Card[] = getDeck();
    console.log(deck.slice());
    shuffle(deck);
    console.log(deck);

    //let i = 0;
    //const card = deck[i];
    //console.log(card);
}

window.onload = main;
