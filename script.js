const suits = {"♥": "hearts", "♦": "diamonds", "♣": "clubs", "♠": "spades"}; // Umwandlung für Bildnamen
const exercises = {"♥": "Liegestütze", "♦": "Kniebeugen", "♣": "Sit-Ups", "♠": "Jumping Jacks"};
let deck = [];

function createDeck() {
    deck = [];
    for (let suit in suits) {
        for (let i = 2; i <= 10; i++) {
            deck.push({ value: i, suit: suit });
        }
        deck.push({ value: "ace", suit: suit });
        deck.push({ value: "jack", suit: suit });
        deck.push({ value: "queen", suit: suit });
        deck.push({ value: "king", suit: suit });
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

document.getElementById("shuffle").addEventListener("click", () => {
    createDeck();
    shuffleDeck();
    document.getElementById("cardDisplay").innerHTML = "Deck gemischt! Ziehe eine Karte.";
});

document.getElementById("drawCard").addEventListener("click", () => {
    if (deck.length === 0) {
        document.getElementById("cardDisplay").innerHTML = "Keine Karten mehr! Bitte mischen.";
        return;
    }

    const card = deck.pop();
    const exercise = exercises[card.suit];
    const suitName = suits[card.suit];
    const cardImageUrl = `svg_playing_cards/fronts/${suitName}_${card.value}.svg`;

    
    document.getElementById("cardDisplay").innerHTML = `
        <p>${card.value}x ${exercise} (${card.suit})</p>
        <img src="${cardImageUrl}" alt="${card.value} ${card.suit}" style="width:100px;">
    `;
});

// Initiales Deck erstellen
createDeck();
shuffleDeck();
