// https://tekeye.uk/playing_cards/svg-playing-cards
export var CardKind;
(function (CardKind) {
    CardKind[CardKind["Clubs"] = 0] = "Clubs";
    CardKind[CardKind["Diamonds"] = 1] = "Diamonds";
    CardKind[CardKind["Spades"] = 2] = "Spades";
    CardKind[CardKind["Hearts"] = 3] = "Hearts";
})(CardKind || (CardKind = {}));
export var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 0] = "Ace";
    CardType[CardType["Two"] = 1] = "Two";
    CardType[CardType["Three"] = 2] = "Three";
    CardType[CardType["Four"] = 3] = "Four";
    CardType[CardType["Five"] = 4] = "Five";
    CardType[CardType["Six"] = 5] = "Six";
    CardType[CardType["Seven"] = 6] = "Seven";
    CardType[CardType["Eight"] = 7] = "Eight";
    CardType[CardType["Nine"] = 8] = "Nine";
    CardType[CardType["Ten"] = 9] = "Ten";
    CardType[CardType["Jack"] = 10] = "Jack";
    CardType[CardType["Queen"] = 11] = "Queen";
    CardType[CardType["King"] = 12] = "King";
})(CardType || (CardType = {}));
export function getDeck() {
    return [
        { kind: CardKind.Spades, type: CardType.Ace, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Ace, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Ace, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Ace, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Two, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Two, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Two, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Two, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Three, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Three, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Three, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Three, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Four, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Four, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Four, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Four, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Five, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Five, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Five, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Five, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Six, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Six, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Six, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Six, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Seven, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Seven, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Seven, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Seven, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Eight, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Eight, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Eight, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Eight, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Nine, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Nine, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Nine, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Nine, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Ten, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Ten, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Ten, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Ten, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Jack, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Jack, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Jack, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Jack, isCovered: true },
        { kind: CardKind.Spades, type: CardType.Queen, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.Queen, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.Queen, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.Queen, isCovered: true },
        { kind: CardKind.Spades, type: CardType.King, isCovered: true },
        { kind: CardKind.Hearts, type: CardType.King, isCovered: true },
        { kind: CardKind.Diamonds, type: CardType.King, isCovered: true },
        { kind: CardKind.Clubs, type: CardType.King, isCovered: true },
    ];
}
