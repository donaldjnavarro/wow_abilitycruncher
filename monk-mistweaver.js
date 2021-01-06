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

    report() {
        // Report details about the ability
        console.log();
        console.log(
            `| ${this.name}\n`+
            `| hps / second : ${this.healPerSecond()}\n`+
            `| hps / mana   : ${this.healPerMana()}`
        );
        if (ability.extras) {
            for (var i = 0;i < this.extras.length;i++) {console.log(
            `| Extra        : ${this.extras[i]}`
            )};
        };
    }
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

abilities.push(
    new ability(
        'Essence Font', // name
        3600, // mana
        0, // castingtime
        5.4, // duration
        12, // cooldown
        6, // targets
        (703 + 418) * 6 // healing
    )
);

// Expel Harm
abilities.push(
    new ability(
        'Expel Harm', // name
        1500, // mana
        0, // castingtime
        1, // duration
        15, // cooldown
        1, // targets
        2279, // healing
        'Also heals the target if cast during Soothing Mist'
    )
);

// Yulon
abilities.push(
    new ability(
        'Yulon', // name
        2500, // mana
        0, // castingtime
        25, // duration
        180, // cooldown
        3, // targets
        ( 1564 / 4 ) * 25 // healing per 4 seconds
    )
);

// Revival
abilities.push(
    new ability(
        'Revival', // name
        2187, // mana
        0, // castingtime
        1, // duration
        180, // cooldown
        [10, 14, 20], // targets
        4576.2 // healing
    )
);

// Faeline Stomp
abilities.push(
    new ability(
        'Faeline Stomp', // name
        2000, // mana
        0, // castingtime
        1, // duration
        30, // cooldown
        5, // targets
        1356 * 5, // healing
        ['Each target is also healed by an Essence Font bolt']
    )
);

// Bag of Tricks
abilities.push(
    new ability(
        'Bag of Tricks', // name
        0, // mana
        0, // castingtime
        1, // duration
        90, // cooldown
        1, // targets
        4652 // healing
    )
);

// Display report for each ability
for (var i = 0;i < abilities.length;i++) {
    abilities[i].report()
};