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
        { kind: CardKind.Spades, type: CardType.Ace, icon: "🂡 " },
        { kind: CardKind.Hearts, type: CardType.Ace, icon: "🂱 " },
        { kind: CardKind.Diamonds, type: CardType.Ace, icon: "🃁 " },
        { kind: CardKind.Clubs, type: CardType.Ace, icon: "🃑 " },
        { kind: CardKind.Spades, type: CardType.Two, icon: "🂢 " },
        { kind: CardKind.Hearts, type: CardType.Two, icon: "🂲 " },
        { kind: CardKind.Diamonds, type: CardType.Two, icon: "🃂 " },
        { kind: CardKind.Clubs, type: CardType.Two, icon: "🃒 " },
        { kind: CardKind.Spades, type: CardType.Three, icon: "🂣 " },
        { kind: CardKind.Hearts, type: CardType.Three, icon: "🂳 " },
        { kind: CardKind.Diamonds, type: CardType.Three, icon: "🃃 " },
        { kind: CardKind.Clubs, type: CardType.Three, icon: "🃓 " },
        { kind: CardKind.Spades, type: CardType.Four, icon: "🂤 " },
        { kind: CardKind.Hearts, type: CardType.Four, icon: "🂴 " },
        { kind: CardKind.Diamonds, type: CardType.Four, icon: "🃄 " },
        { kind: CardKind.Clubs, type: CardType.Four, icon: "🃔 " },
        { kind: CardKind.Spades, type: CardType.Five, icon: "🂥 " },
        { kind: CardKind.Hearts, type: CardType.Five, icon: "🂵 " },
        { kind: CardKind.Diamonds, type: CardType.Five, icon: "🃅 " },
        { kind: CardKind.Clubs, type: CardType.Five, icon: "🃕 " },
        { kind: CardKind.Spades, type: CardType.Six, icon: "🂦 " },
        { kind: CardKind.Hearts, type: CardType.Six, icon: "🂶 " },
        { kind: CardKind.Diamonds, type: CardType.Six, icon: "🃆 " },
        { kind: CardKind.Clubs, type: CardType.Six, icon: "🃖 " },
        { kind: CardKind.Spades, type: CardType.Seven, icon: "🂧 " },
        { kind: CardKind.Hearts, type: CardType.Seven, icon: "🂷 " },
        { kind: CardKind.Diamonds, type: CardType.Seven, icon: "🃇 " },
        { kind: CardKind.Clubs, type: CardType.Seven, icon: "🃗 " },
        { kind: CardKind.Spades, type: CardType.Eight, icon: "🂨 " },
        { kind: CardKind.Hearts, type: CardType.Eight, icon: "🂸 " },
        { kind: CardKind.Diamonds, type: CardType.Eight, icon: "🃈 " },
        { kind: CardKind.Clubs, type: CardType.Eight, icon: "🃘 " },
        { kind: CardKind.Spades, type: CardType.Nine, icon: "🂩 " },
        { kind: CardKind.Hearts, type: CardType.Nine, icon: "🂹 " },
        { kind: CardKind.Diamonds, type: CardType.Nine, icon: "🃉 " },
        { kind: CardKind.Clubs, type: CardType.Nine, icon: "🃙 " },
        { kind: CardKind.Spades, type: CardType.Ten, icon: "🂪 " },
        { kind: CardKind.Hearts, type: CardType.Ten, icon: "🂺 " },
        { kind: CardKind.Diamonds, type: CardType.Ten, icon: "🃊 " },
        { kind: CardKind.Clubs, type: CardType.Ten, icon: "🃚 " },
        { kind: CardKind.Spades, type: CardType.Jack, icon: "🂫 " },
        { kind: CardKind.Hearts, type: CardType.Jack, icon: "🂻 " },
        { kind: CardKind.Diamonds, type: CardType.Jack, icon: "🃋 " },
        { kind: CardKind.Clubs, type: CardType.Jack, icon: "🃛 " },
        { kind: CardKind.Spades, type: CardType.Queen, icon: "🂭 " },
        { kind: CardKind.Hearts, type: CardType.Queen, icon: "🂽 " },
        { kind: CardKind.Diamonds, type: CardType.Queen, icon: "🃍 " },
        { kind: CardKind.Clubs, type: CardType.Queen, icon: "🃝 " },
        { kind: CardKind.Spades, type: CardType.King, icon: "🂮 " },
        { kind: CardKind.Hearts, type: CardType.King, icon: "🂾 " },
        { kind: CardKind.Diamonds, type: CardType.King, icon: "🃎 " },
        { kind: CardKind.Clubs, type: CardType.King, icon: "🃞 " },
    ];
}
