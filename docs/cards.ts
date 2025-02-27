export enum CardKind {
    Clubs,
    Diamonds,
    Spades,
    Hearts
}

export enum CardType {
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

export interface Card {
    kind: CardKind,
    type: CardType,
    icon: string,
}

export function getDeck(): Card[] {
    return [
        { kind: CardKind.Spades,   type: CardType.Ace,   icon: "🂡 " },
        { kind: CardKind.Hearts,   type: CardType.Ace,   icon: "🂱 " },
        { kind: CardKind.Diamonds, type: CardType.Ace,   icon: "🃁 " },
        { kind: CardKind.Clubs,    type: CardType.Ace,   icon: "🃑 " },

        { kind: CardKind.Spades,   type: CardType.Two,   icon: "🂢 " },
        { kind: CardKind.Hearts,   type: CardType.Two,   icon: "🂲 " },
        { kind: CardKind.Diamonds, type: CardType.Two,   icon: "🃂 " },
        { kind: CardKind.Clubs,    type: CardType.Two,   icon: "🃒 " },

        { kind: CardKind.Spades,   type: CardType.Three, icon: "🂣 " },
        { kind: CardKind.Hearts,   type: CardType.Three, icon: "🂳 " },
        { kind: CardKind.Diamonds, type: CardType.Three, icon: "🃃 " },
        { kind: CardKind.Clubs,    type: CardType.Three, icon: "🃓 " },

        { kind: CardKind.Spades,   type: CardType.Four,  icon: "🂤 " },
        { kind: CardKind.Hearts,   type: CardType.Four,  icon: "🂴 " },
        { kind: CardKind.Diamonds, type: CardType.Four,  icon: "🃄 " },
        { kind: CardKind.Clubs,    type: CardType.Four,  icon: "🃔 " },

        { kind: CardKind.Spades,   type: CardType.Five,  icon: "🂥 " },
        { kind: CardKind.Hearts,   type: CardType.Five,  icon: "🂵 " },
        { kind: CardKind.Diamonds, type: CardType.Five,  icon: "🃅 " },
        { kind: CardKind.Clubs,    type: CardType.Five,  icon: "🃕 " },

        { kind: CardKind.Spades,   type: CardType.Six,   icon: "🂦 " },
        { kind: CardKind.Hearts,   type: CardType.Six,   icon: "🂶 " },
        { kind: CardKind.Diamonds, type: CardType.Six,   icon: "🃆 " },
        { kind: CardKind.Clubs,    type: CardType.Six,   icon: "🃖 " },

        { kind: CardKind.Spades,   type: CardType.Seven, icon: "🂧 " },
        { kind: CardKind.Hearts,   type: CardType.Seven, icon: "🂷 " },
        { kind: CardKind.Diamonds, type: CardType.Seven, icon: "🃇 " },
        { kind: CardKind.Clubs,    type: CardType.Seven, icon: "🃗 " },

        { kind: CardKind.Spades,   type: CardType.Eight, icon: "🂨 " },
        { kind: CardKind.Hearts,   type: CardType.Eight, icon: "🂸 " },
        { kind: CardKind.Diamonds, type: CardType.Eight, icon: "🃈 " },
        { kind: CardKind.Clubs,    type: CardType.Eight, icon: "🃘 " },

        { kind: CardKind.Spades,   type: CardType.Nine,  icon: "🂩 " },
        { kind: CardKind.Hearts,   type: CardType.Nine,  icon: "🂹 " },
        { kind: CardKind.Diamonds, type: CardType.Nine,  icon: "🃉 " },
        { kind: CardKind.Clubs,    type: CardType.Nine,  icon: "🃙 " },

        { kind: CardKind.Spades,   type: CardType.Ten,   icon: "🂪 " },
        { kind: CardKind.Hearts,   type: CardType.Ten,   icon: "🂺 " },
        { kind: CardKind.Diamonds, type: CardType.Ten,   icon: "🃊 " },
        { kind: CardKind.Clubs,    type: CardType.Ten,   icon: "🃚 " },

        { kind: CardKind.Spades,   type: CardType.Jack,  icon: "🂫 " },
        { kind: CardKind.Hearts,   type: CardType.Jack,  icon: "🂻 " },
        { kind: CardKind.Diamonds, type: CardType.Jack,  icon: "🃋 " },
        { kind: CardKind.Clubs,    type: CardType.Jack,  icon: "🃛 " },

        { kind: CardKind.Spades,   type: CardType.Queen, icon: "🂭 " },
        { kind: CardKind.Hearts,   type: CardType.Queen, icon: "🂽 " },
        { kind: CardKind.Diamonds, type: CardType.Queen, icon: "🃍 " },
        { kind: CardKind.Clubs,    type: CardType.Queen, icon: "🃝 " },

        { kind: CardKind.Spades,   type: CardType.King,  icon: "🂮 " },
        { kind: CardKind.Hearts,   type: CardType.King,  icon: "🂾 " },
        { kind: CardKind.Diamonds, type: CardType.King,  icon: "🃎 " },
        { kind: CardKind.Clubs,    type: CardType.King,  icon: "🃞 " },
    ];
}
