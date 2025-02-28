import { CardKind, getDeck } from "./cards.js";
function getElement(id) {
    return document.getElementById(id);
}
const exercises = new Map([
    [CardKind.Diamonds, "push-ups"],
    [CardKind.Clubs, "burpees"],
    [CardKind.Spades, "sit-ups"],
    [CardKind.Hearts, "swimmers"],
]);
function getCardColor(kind) {
    switch (kind) {
        case CardKind.Clubs:
        case CardKind.Spades:
            return "black";
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
}
function main() {
    let current = 0;
    const deck = getDeck();
    shuffle(deck);
    const btnNext = getElement("btn_next");
    updateDOM(deck, current);
    btnNext.onclick = () => {
        updateDOM(deck, current);
        current++;
    };
}
window.onload = main;
