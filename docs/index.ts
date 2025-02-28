import { CardKind, CardType, Card, getDeck } from "./cards.js";


function getElement<T>(id: string): T {
    return document.getElementById(id)! as T;
}



const exercises = new Map<CardKind, string>(
    [
        [ CardKind.Diamonds, "push-ups" ],
        [ CardKind.Clubs,    "burpees"  ],
        [ CardKind.Spades,   "sit-ups"  ],
        [ CardKind.Hearts,   "swimmers" ],
    ]
);

function shuffle(deck: Card[]) {
    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}


function updateCard() {
    const divCard = getElement<HTMLDivElement>("div_card");
    divCard.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = "hi";
    divCard.appendChild(p);
}

function main() {
    const btnNext = getElement<HTMLButtonElement>("btn_next");

    let current = 0;
    btnNext.onclick = () => current++;

    updateCard();

    const deck: Card[] = getDeck();
    shuffle(deck);
    console.log(deck);

    //const card = deck[i];
    //console.log(card);
}

window.onload = main;
