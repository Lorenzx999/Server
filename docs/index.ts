import { CardKind, CardType, deck } from "cards";


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
    console.log(exercises);
}

window.onload = main;
