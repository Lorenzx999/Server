"use strict";
var CardKind;
(function (CardKind) {
    CardKind[CardKind["Clubs"] = 0] = "Clubs";
    CardKind[CardKind["Diamonds"] = 1] = "Diamonds";
    CardKind[CardKind["Spades"] = 2] = "Spades";
    CardKind[CardKind["Hearts"] = 3] = "Hearts";
})(CardKind || (CardKind = {}));
var CardType;
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
const exercises = new Map([
    [CardKind.Diamonds, "push-ups"],
    [CardKind.Clubs, "burpees"],
    [CardKind.Spades, "sit-ups"],
    [CardKind.Hearts, "swimmers"],
]);
const deck = [
    "🂡 ", "🂱 ", "🃁 ", "🃑 ",
    "🂢 ", "🂲 ", "🃂 ", "🃒 ",
    "🂣 ", "🂳 ", "🃃 ", "🃓 ",
    "🂤 ", "🂴 ", "🃄 ", "🃔 ",
    "🂥 ", "🂵 ", "🃅 ", "🃕 ",
    "🂦 ", "🂶 ", "🃆 ", "🃖 ",
    "🂧 ", "🂷 ", "🃇 ", "🃗 ",
    "🂨 ", "🂸 ", "🃈 ", "🃘 ",
    "🂩 ", "🂹 ", "🃉 ", "🃙 ",
    "🂪 ", "🂺 ", "🃊 ", "🃚 ",
    "🂫 ", "🂻 ", "🃋 ", "🃛 ",
    "🂭 ", "🂽 ", "🃍 ", "🃝 ",
    "🂮 ", "🂾 ", "🃎 ", "🃞 ",
];
function shuffle() {
}
function main() {
    console.log(exercises);
}
window.onload = main;
