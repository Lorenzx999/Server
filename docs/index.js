import { CardKind, CardType, getDeck } from "./cards.js";
const EXERCISES = new Map([
    [CardKind.Diamonds, "push-ups"],
    [CardKind.Clubs, "burpees"],
    [CardKind.Spades, "sit-ups"],
    [CardKind.Hearts, "swimmers"],
]);
function getElement(id) {
    return document.getElementById(id);
}
function getCardImageFilename(card) {
    const kind = CardKind[card.kind];
    const type = CardType[card.type];
    return card.isCovered
        ? "back_side.svg"
        : `${kind}_${type}.svg`;
}
function getCardColor(kind) {
    switch (kind) {
        case CardKind.Clubs:
        case CardKind.Spades:
            return "grey";
        case CardKind.Diamonds:
        case CardKind.Hearts:
            return "red";
    }
}
function shuffle(deck) {
    console.log("Shuffling...");
    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}
function updateDOM(card) {
    document.body.style.backgroundColor = getCardColor(card.kind);
    const imgCard = getElement("img_card");
    const path = getCardImageFilename(card);
    imgCard.src = `./icons/cards/${path}`;
    const pText = getElement("p_text");
    pText.innerHTML = EXERCISES.get(card.kind);
}
function update(state) {
    if (state.current === state.deck.length) {
        state.current = 0;
        shuffle(state.deck);
    }
    const card = state.deck[state.current];
    console.log(`current: ${state.current}`);
    console.log(card);
    const imgCard = getElement("img_card");
    imgCard.onclick = () => {
        card.isCovered = false;
    };
    updateDOM(card);
}
window.onload = () => {
    let state = {
        current: 0,
        deck: getDeck(),
    };
    shuffle(state.deck);
    const btnNext = getElement("btn_next");
    const btnPrev = getElement("btn_prev");
    update(state);
    btnNext.onclick = () => {
        state.current++;
        update(state);
    };
    btnPrev.onclick = () => {
        state.current--;
        update(state);
    };
};
