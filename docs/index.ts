import { CardKind, CardType, Card, getDeck } from "cards";


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
}

window.onload = main;
