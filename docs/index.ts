import { CardKind, CardType, Card, getDeck } from "./cards.js";

interface State {
    current: number,
    deck: Card[],
}

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
    console.log("Shuffling...");

    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}

function updateDOM(state: State) {
    const card = state.deck[state.current];
    console.log(`current: ${state.current}`);
    console.log(card);

    document.body.style.backgroundColor = getCardColor(card.kind);
    const path = getCardImageFilename(card);

    const imgCards = [
        getElement<HTMLImageElement>("img_card_left1"),
        getElement<HTMLImageElement>("img_card_left2"),
        getElement<HTMLImageElement>("img_card_center"),
        getElement<HTMLImageElement>("img_card_right1"),
        getElement<HTMLImageElement>("img_card_right2"),
    ];

    for (const card of imgCards)
        card.src = `./icons/cards/${path}`;

    const pText = getElement<HTMLParagraphElement>("p_text");
    pText.innerHTML = EXERCISES.get(card.kind)!;

    if (state.current === state.deck.length - 1) {
        state.current = 0;
        shuffle(state.deck);
    }

}


function main() {
    let state: State = {
        current: 0,
        deck: getDeck(),
    };
    shuffle(state.deck);

    const btnNext = getElement<HTMLButtonElement>("btn_next");
    const btnPrev = getElement<HTMLButtonElement>("btn_prev");


    updateDOM(state);

    btnNext.onclick = () => {
        updateDOM(state);
        state.current++;
    };

    btnPrev.onclick = () => {
        updateDOM(state);
        state.current--;
    };

}

window.onload = main;
