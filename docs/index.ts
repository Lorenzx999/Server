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

function updateDOM(deck: Card[], current: number) {
    const card = deck[current];

    const pCard = getElement<HTMLParagraphElement>("p_card");
    pCard.innerHTML = card.icon;

    document.body.style.backgroundColor = getCardColor(card.kind);
}

function main() {
    let current = 0;
    const deck: Card[] = getDeck();
    shuffle(deck);

    const btnNext = getElement<HTMLButtonElement>("btn_next");

    updateDOM(deck, current);

    btnNext.onclick = () => {
        updateDOM(deck, current);
        current++;
    };

}

window.onload = main;
