import { CardKind, CardType, Card, getDeck } from "./cards.js";

// card images from:
// https://tekeye.uk/playing_cards/svg-playing-cards


const EXERCISES = new Map<CardKind, string>(
    [
        [ CardKind.Diamonds, "push-ups" ],
        [ CardKind.Clubs,    "burpees"  ],
        [ CardKind.Spades,   "sit-ups"  ],
        [ CardKind.Hearts,   "swimmers" ],
    ]
);

function getElement<T>(id: string): T {
    return document.getElementById(id)! as T;
}

function getCardImageFilename(card: Card) {
    const kind = CardKind[card.kind];
    const type = CardType[card.type];
    return `${kind}_${type}.svg`;
}

function getCardColor(kind: CardKind): string {
    switch (kind) {
        case CardKind.Clubs:
        case CardKind.Spades:
            return "grey";
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

    const path = getCardImageFilename(card);
    const imgCard = getElement<HTMLImageElement>("img_card");
    imgCard.src = `./icons/cards/${path}`

    const pText = getElement<HTMLParagraphElement>("p_text");
    pText.innerHTML = EXERCISES.get(card.kind)!;

}

function main() {
    // TODO: out-of-bounds checking
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
