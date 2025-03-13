import { CardKind, CardType, getDeck } from "./cards.js";
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
function updateDOM(card, current, exercises) {
    document.body.style.backgroundColor = getCardColor(card.kind);
    const imgCard = getElement("img_card");
    const path = getCardImageFilename(card);
    imgCard.src = `./icons/cards/${path}`;
    const btnNext = getElement("btn_next");
    btnNext.disabled = card.isCovered;
    const pCurrent = getElement("p_current");
    pCurrent.innerHTML = `#${current}`;
    const pText = getElement("p_text");
    pText.innerHTML = card.isCovered
        ? "hidden"
        : exercises.get(card.kind);
}
function update(state, exercises) {
    if (state.current === state.deck.length) {
        state.current = 0;
        shuffle(state.deck);
    }
    const card = state.deck[state.current];
    console.log(`current: ${state.current}`);
    console.log(card);
    const imgCard = getElement("img_card");
    imgCard.onclick = () => {
        card.isCovered = !card.isCovered;
        updateDOM(card, state.current, exercises);
    };
    updateDOM(card, state.current, exercises);
}
function game(exercises) {
    let state = {
        current: 0,
        deck: getDeck(),
    };
    shuffle(state.deck);
    const btnNext = getElement("btn_next");
    const btnPrev = getElement("btn_prev");
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
    const btnStart = getElement("btn_start");
    const divSetup = getElement("div_setup");
    const text1 = getElement("text_1");
    const text2 = getElement("text_2");
    const text3 = getElement("text_3");
    const text4 = getElement("text_4");
    btnStart.onclick = () => {
        console.log(text1.value);
        const exercises = new Map([
            [CardKind.Diamonds, text1.value],
            [CardKind.Clubs, text2.value],
            [CardKind.Spades, text3.value],
            [CardKind.Hearts, text4.value],
        ]);
        divSetup.hidden = true;
        game(exercises);
    };
};
