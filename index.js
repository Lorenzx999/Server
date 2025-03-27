import { CardKind, CardType, getDeck } from "./cards.js";

// Neue Map für die Übungen basierend auf Nutzereingaben
let userExercises = new Map();

function getUserExercises() {
    userExercises.set(CardKind.Diamonds, getElement("text_1").value || "push-ups");
    userExercises.set(CardKind.Clubs, getElement("text_2").value || "burpees");
    userExercises.set(CardKind.Spades, getElement("text_3").value || "sit-ups");
    userExercises.set(CardKind.Hearts, getElement("text_4").value || "swimmers");
}

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

function updateDOM(card, current) {
    document.body.style.backgroundColor = getCardColor(card.kind);
    const imgCard = getElement("img_card");
    const path = getCardImageFilename(card);
    imgCard.src = `./icons/cards/${path}`;
    const btnNext = getElement("btn_next");
    btnNext.disabled = card.isCovered;
    const pCurrent = getElement("p_current");
    pCurrent.innerHTML = `#${current}`;
    const pText = getElement("p_text");
    pText.innerHTML = card.isCovered ? "hidden" : userExercises.get(card.kind);
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
        card.isCovered = !card.isCovered;
        updateDOM(card, state.current);
    };
    updateDOM(card, state.current);
}

window.onload = () => {
    let state = {
        current: 0,
        deck: getDeck(),
    };
    shuffle(state.deck);
    const btnNext = getElement("btn_next");
    const btnPrev = getElement("btn_prev");
    const btnStart = getElement("btn_start");
    
    btnStart.onclick = () => {
        getUserExercises(); // Speichert die Eingaben
        update(state); // Aktualisiert die Anzeige mit neuen Übungen
    };
    
    btnNext.onclick = () => {
        state.current++;
        update(state);
    };
    btnPrev.onclick = () => {
        state.current--;
        update(state);
    };
    
    update(state);
};
