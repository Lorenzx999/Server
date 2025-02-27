
enum CardKind {
    Clubs,
    Diamonds,
    Spades,
    Hearts
}

enum CardType {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
}

interface Card {
    kind: CardKind,
    type: CardType,
    icon: string,
}

const exercises = new Map<CardKind, string>(
    [
        [ CardKind.Diamonds, "push-ups" ],
        [ CardKind.Clubs,    "burpees"  ],
        [ CardKind.Spades,   "sit-ups"  ],
        [ CardKind.Hearts,   "swimmers" ],
    ]
);

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
