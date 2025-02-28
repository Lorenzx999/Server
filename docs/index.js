import { CardKind, CardType, getDeck } from "./cards.js";
// card images from:
// https://tekeye.uk/playing_cards/svg-playing-cards
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
    return `${kind}_${type}.svg`;
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
    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}
function updateDOM(deck, current) {
    const card = deck[current];
    const pCard = getElement("p_card");
    pCard.innerHTML = card.icon;
    document.body.style.backgroundColor = getCardColor(card.kind);
    const path = getCardImageFilename(card);
    const imgCard = getElement("img_card");
    imgCard.src = `./icons/cards/${path}`;
    const pText = getElement("p_text");
    pText.innerHTML = EXERCISES.get(card.kind);
}
function main() {
    // TODO: out-of-bounds checking
    let current = 0;
    const deck = getDeck();
    shuffle(deck);
    const btnNext = getElement("btn_next");
    updateDOM(deck, current);
    if (current === deck.length - 1) {
        btnNext.disabled = true;
    }
    btnNext.onclick = () => {
        current++;
        updateDOM(deck, current);
    };
}
window.onload = main;
