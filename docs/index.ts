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

    return card.isCovered
        ? "back_side.svg"
        : `${kind}_${type}.svg`;
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

function updateDOM(state: State, card: Card) {
    document.body.style.backgroundColor = getCardColor(card.kind);
    const path = getCardImageFilename(card);

    const imgCard = getElement<HTMLImageElement>("img_card");
    imgCard.src = `./icons/cards/${path}`;

    const pText = getElement<HTMLParagraphElement>("p_text");
    pText.innerHTML = EXERCISES.get(card.kind)!;
}

function update(state: State) {

    if (state.current === state.deck.length) {
        state.current = 0;
        shuffle(state.deck);
    }

    const card = state.deck[state.current];
    console.log(`current: ${state.current}`);
    console.log(card);

    updateDOM(state, card);

}

window.onload = () => {

    let state: State = {
        current: 0,
        deck: getDeck(),
    };

    shuffle(state.deck);

    const btnNext = getElement<HTMLButtonElement>("btn_next");
    const btnPrev = getElement<HTMLButtonElement>("btn_prev");

    update(state);

    btnNext.onclick = () => {
        state.current++;
        update(state);
    };

    btnPrev.onclick = () => {
        state.current--;
        update(state);
    };

}

