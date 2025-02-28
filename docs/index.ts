import { CardKind, CardType, Card, getDeck } from "./cards.js";

const exercises = new Map<CardKind, string>(
    [
        [ CardKind.Diamonds, "push-ups" ],
        [ CardKind.Clubs,    "burpees"  ],
        [ CardKind.Spades,   "sit-ups"  ],
        [ CardKind.Hearts,   "swimmers" ],
    ]
);

function shuffle() {
}


function main() {
    const deck: Card[] = getDeck();
    console.log(deck);

    let i = 0;
    const card = deck[i];
    console.log(card);
}

window.onload = main;
