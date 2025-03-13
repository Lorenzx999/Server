import { CardKind, CardType, Card, getDeck } from "./cards.js";

interface State {
    current: number,
    deck: Card[],
}


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

function updateDOM(card: Card, current: number, exercises: Map<CardKind, string>) {
    document.body.style.backgroundColor = getCardColor(card.kind);

    const imgCard = getElement<HTMLImageElement>("img_card");
    const path    = getCardImageFilename(card);
    imgCard.src   = `./icons/cards/${path}`;

    const btnNext = getElement<HTMLButtonElement>("btn_next");
    btnNext.disabled = card.isCovered;

    const pCurrent = getElement<HTMLParagraphElement>("p_current");
    pCurrent.innerHTML = `#${current}`;

    const pText = getElement<HTMLParagraphElement>("p_text");

    pText.innerHTML = card.isCovered
        ? "hidden"
        : exercises.get(card.kind)!;

}

function update(state: State, exercises: Map<CardKind, string>) {

    if (state.current === state.deck.length) {
        state.current = 0;
        shuffle(state.deck);
    }

    const card = state.deck[state.current];
    console.log(`current: ${state.current}`);
    console.log(card);

    const imgCard = getElement<HTMLImageElement>("img_card");
    imgCard.onclick = () => {
        card.isCovered = !card.isCovered;
        updateDOM(card, state.current, exercises);
    };

    updateDOM(card, state.current, exercises);

}

function game(exercises: Map<CardKind, string>) {

    let state: State = {
        current: 0,
        deck: getDeck(),
    };

    shuffle(state.deck);

    const btnNext = getElement<HTMLButtonElement>("btn_next");
    const btnPrev = getElement<HTMLButtonElement>("btn_prev");

    update(state, exercises);

    btnNext.onclick = () => {
        state.current++;
        update(state, exercises);
    };

    btnPrev.onclick = () => {
        state.current--;
        update(state, exercises);
    };

}

window.onload = () => {

    const btnStart = getElement<HTMLButtonElement>("btn_start");
    const divSetup = getElement<HTMLDivElement>("div_setup");
    const text1    = getElement<HTMLInputElement>("text_1");
    const text2    = getElement<HTMLInputElement>("text_2");
    const text3    = getElement<HTMLInputElement>("text_3");
    const text4    = getElement<HTMLInputElement>("text_4");

    btnStart.onclick = () => {

        console.log(text1.value);

        const exercises = new Map<CardKind, string> (
            [
                [ CardKind.Diamonds, text1.value ],
                [ CardKind.Clubs,    text2.value ],
                [ CardKind.Spades,   text3.value ],
                [ CardKind.Hearts,   text4.value ],
            ]
        );

        divSetup.hidden = true;
        game(exercises);
    };

}
