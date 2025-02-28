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

function getCardColor(kind: CardKind): string {
    switch (kind) {
        case CardKind.Clubs:
        case CardKind.Spades:
            return "black";
        case CardKind.Diamonds:
        case CardKind.Hearts:
            return "red";
    }
}

function shuffle(deck: Card[]) {
    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}


function updateCard(card: Card) {
    const divCard = getElement<HTMLDivElement>("div_card");
    divCard.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = card.icon;
    divCard.appendChild(p);
}

function main() {
    const deck: Card[] = getDeck();
    shuffle(deck);

    const btnNext = getElement<HTMLButtonElement>("btn_next");

    let current = 0;
    btnNext.onclick = () => current++;

    setInterval(() => {
        const card = deck[current];
        updateCard(card);
        document.body.style.backgroundColor = getCardColor(card.kind);
    }, 500);


    //const card = deck[i];
    //console.log(card);
}

window.onload = main;
