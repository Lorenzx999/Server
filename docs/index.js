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
function updateCard(card) {
    const divCard = getElement("div_card");
    divCard.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = card.icon;
    divCard.appendChild(p);
}
function main() {
    const deck = getDeck();
    shuffle(deck);
    const btnNext = getElement("btn_next");
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
