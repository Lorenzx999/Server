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
}

export function getDeck(): Card[] {
    return [
        { kind: CardKind.Spades,   type: CardType.Ace   },
        { kind: CardKind.Hearts,   type: CardType.Ace   },
        { kind: CardKind.Diamonds, type: CardType.Ace   },
        { kind: CardKind.Clubs,    type: CardType.Ace   },

        { kind: CardKind.Spades,   type: CardType.Two   },
        { kind: CardKind.Hearts,   type: CardType.Two   },
        { kind: CardKind.Diamonds, type: CardType.Two   },
        { kind: CardKind.Clubs,    type: CardType.Two   },

        { kind: CardKind.Spades,   type: CardType.Three },
        { kind: CardKind.Hearts,   type: CardType.Three },
        { kind: CardKind.Diamonds, type: CardType.Three },
        { kind: CardKind.Clubs,    type: CardType.Three },

        { kind: CardKind.Spades,   type: CardType.Four  },
        { kind: CardKind.Hearts,   type: CardType.Four  },
        { kind: CardKind.Diamonds, type: CardType.Four  },
        { kind: CardKind.Clubs,    type: CardType.Four  },

        { kind: CardKind.Spades,   type: CardType.Five  },
        { kind: CardKind.Hearts,   type: CardType.Five  },
        { kind: CardKind.Diamonds, type: CardType.Five  },
        { kind: CardKind.Clubs,    type: CardType.Five  },

        { kind: CardKind.Spades,   type: CardType.Six   },
        { kind: CardKind.Hearts,   type: CardType.Six   },
        { kind: CardKind.Diamonds, type: CardType.Six   },
        { kind: CardKind.Clubs,    type: CardType.Six   },

        { kind: CardKind.Spades,   type: CardType.Seven },
        { kind: CardKind.Hearts,   type: CardType.Seven },
        { kind: CardKind.Diamonds, type: CardType.Seven },
        { kind: CardKind.Clubs,    type: CardType.Seven },

        { kind: CardKind.Spades,   type: CardType.Eight },
        { kind: CardKind.Hearts,   type: CardType.Eight },
        { kind: CardKind.Diamonds, type: CardType.Eight },
        { kind: CardKind.Clubs,    type: CardType.Eight },

        { kind: CardKind.Spades,   type: CardType.Nine  },
        { kind: CardKind.Hearts,   type: CardType.Nine  },
        { kind: CardKind.Diamonds, type: CardType.Nine  },
        { kind: CardKind.Clubs,    type: CardType.Nine  },

        { kind: CardKind.Spades,   type: CardType.Ten   },
        { kind: CardKind.Hearts,   type: CardType.Ten   },
        { kind: CardKind.Diamonds, type: CardType.Ten   },
        { kind: CardKind.Clubs,    type: CardType.Ten   },

        { kind: CardKind.Spades,   type: CardType.Jack  },
        { kind: CardKind.Hearts,   type: CardType.Jack  },
        { kind: CardKind.Diamonds, type: CardType.Jack  },
        { kind: CardKind.Clubs,    type: CardType.Jack  },

        { kind: CardKind.Spades,   type: CardType.Queen },
        { kind: CardKind.Hearts,   type: CardType.Queen },
        { kind: CardKind.Diamonds, type: CardType.Queen },
        { kind: CardKind.Clubs,    type: CardType.Queen },

        { kind: CardKind.Spades,   type: CardType.King  },
        { kind: CardKind.Hearts,   type: CardType.King  },
        { kind: CardKind.Diamonds, type: CardType.King  },
        { kind: CardKind.Clubs,    type: CardType.King  },
    ];
}
