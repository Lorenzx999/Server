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
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}
function updateCard() {
    const divCard = getElement("div_card");
    divCard.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = "hi";
    divCard.appendChild(p);
}
function main() {
    const btnNext = getElement("btn_next");
    let current = 0;
    btnNext.onclick = () => current++;
    updateCard();
    const deck = getDeck();
    shuffle(deck);
    console.log(deck);
    //const card = deck[i];
    //console.log(card);
}
window.onload = main;
