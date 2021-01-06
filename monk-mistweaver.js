// Monk Mistweaver ability analysis

class ability {
    constructor(
        name,
        mana,
        castingtime,
        duration,
        cooldown,
        targets,
        healing,
        extras=false
        ) {
        this.name = name;
        this.mana = mana;
        this.castingtime = castingtime;
        this.duration = duration;
        this.cooldown = cooldown;
        this.targets = targets;
        this.healing = healing;
        this.extras = extras;
    }
    // Evaluate how many hps per second an ability provides
    healPerSecond() {
        return (
            (this.healing / (this.duration + this.castingtime))
            * this.targets
        );
    }

    // Evaluate how many hps per mana an ability provides
    healPerMana() {
        return (this.healing * this.targets) / this.mana;
    }

}


function report(ability) {
    // Report details about the ability
    console.log();
    console.log(
        `| ${ability.name}\n`+
        `| hps / second : ${ability.healPerSecond()}\n`+
        `| hps / mana   : ${ability.healPerMana()}`
    );
    if (ability.extras) {
        for (var i = 0;i < ability.extras.length;i++) {console.log(
        `| Extra        : ${ability.extras[i]}`
        )};
    };
}

const abilities = [];

abilities.push(
    new ability(
        'Renewing Mist', // name
        1100, // mana
        0, // castingtime
        20, // duration
        9, // cooldown
        1, // targets
        3733 // healing
    )
);

abilities.push(
    new ability(
        'Soothing Mist', // name
        200, // mana
        0, // castingtime
        7.2, // duration
        0, // cooldown
        1, // targets
        6557, // healing
        ['During channel you may cast Enveloping Mist and Vivify instantly']
    )
);

// Enveloping Mist
abilities.push(
    new ability(
        'Enveloping Mist', // name
        3000, // mana
        1.8, // castingtime
        7, // duration
        0, // cooldown
        1, // targets
        6968, // healing
        ['Increase healing from my other spells by 40%']
    )
);

abilities.push(
    new ability(
        'Vivify', // name
        2050, // mana
        1.3, // castingtime
        0, // duration
        0, // cooldown
        1, // targets
        2101, // healing
        ['Also heals all allies with Renewing Mists for 1549']
    )
);

// Yulon

// Revival

// Essence Font

// Expel Harm

// Faeline Stomp

// Bag of Tricks

abilities.push(
    new ability(
        'Refreshing Jade Wind', // name
        1750, // mana
        0, // castingtime
        8.6, // duration
        8.1, // cooldown
        6, // targets
        2246 // healing
    )
);

// Display report for each ability
for (var i = 0;i < abilities.length;i++) {
    report(abilities[i])
};