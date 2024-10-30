const allItems = [
    {
        "version": "1.0",
        "items": [
            {
                "name": "? Message Blocks",
                "difficulty": 1,
                "type": "dynamic",
                "min": 4,
                "max": 8
            },
            {
                "name": "? Message Blocks",
                "difficulty": 2,
                "type": "dynamic",
                "min": 12,
                "max": 15
            },
            {
                "name": "Enter ? Pipes",
                "difficulty": 3,
                "type": "dynamic",
                "min": 18,
                "max": 22
            },
            {
                "name": "Enter ? Pipes",
                "difficulty": 5,
                "type": "dynamic",
                "min": 27,
                "max": 30
            },
            {
                "name": "? Exits",
                "difficulty": 2,
                "type": "dynamic",
                "min": 9,
                "max": 12
            },
            {
                "name": "? Exits",
                "difficulty": 3,
                "type": "dynamic",
                "min": 13,
                "max": 17
            },
            {
                "name": "? Exits",
                "difficulty": 4,
                "type": "dynamic",
                "min": 18,
                "max": 22
            },
            {
                "name": "? Exits",
                "difficulty": 5,
                "type": "dynamic",
                "min": 23,
                "max": 27
            },
            {
                "name": "? Exits",
                "difficulty": 6,
                "type": "dynamic",
                "min": 28,
                "max": 32
            },
            {
                "name": "Bowser Doors ? and ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? and ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? and ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? and ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "? Yoshi Coins",
                "difficulty": 1,
                "type": "dynamic",
                "min": 2,
                "max": 4
            },
            {
                "name": "? Yoshi Coins",
                "difficulty": 3,
                "type": "dynamic",
                "min": 5,
                "max": 7
            },
            {
                "name": "? Yoshi Coins",
                "difficulty": 5,
                "type": "dynamic",
                "min": 8,
                "max": 10
            },
            {
                "name": "? Structures",
                "difficulty": 2,
                "type": "dynamic",
                "min": 3,
                "max": 4
            },
            {
                "name": "? Structures",
                "difficulty": 3,
                "type": "dynamic",
                "min": 5,
                "max": 6
            },
            {
                "name": "? Structures",
                "difficulty": 5,
                "type": "dynamic",
                "min": 7,
                "max": 8
            },
            {
                "name": "4 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "6 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "8 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "10 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "12 Message Blocks",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "15 Message Blocks",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "1 Bonus Game",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Castle",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Switch Palace",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Total Lives",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "100.000 Points",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 levels all yoshi coins",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 levels without coins",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "200 coins",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Sublevels",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Exits",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in world 1",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Unique Yoshis",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 1 All Exits (5)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yellow Switch Palace",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All berries in world 1 (22)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All sublevels in World 1 (4)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins in world 1",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete both exits of a level",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 different types of chucks",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Pokey",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Level as Small Mario (No Star World)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Ghost Houses ? 2 Switch Palaces",
                "difficulty": 2,
                "type": "or",
                "min": "AND",
                "max": "OR"
            },
            {
                "name": "1 Starworld entrance",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Structures",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Unique Yoshis",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "0 Lives in Bonus game",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Ghost House",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Live from a Bonus Block",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Moon",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Exits",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Bonus Games",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Ghost Houses",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 levels all yoshi coins in world 2",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 lives in 3 levels (6)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Springs",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Sublevels in 2 worlds (4)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Switch Palaces",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "200.000 Points",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Secret Exits",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 vines",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 levels all yoshi coins",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Structures",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in world 2",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Swoop (bat)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Top Secret Area",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins of 1 level in 2 worlds (2)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins of 2 levels in 2 worlds (4)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Collect a 50 coins in 2 different levels",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete both exits of 3 levels",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 10 Pipes",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Green Switch Palace",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 3 different types of chucks",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a non-boss Big Boo",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star in 2 worlds (Power-up)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "15 Exits",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Castles",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Lives from Bonus blocks",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "25 Total Lives",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 levels without coins",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 vines in a world",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in star world",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 vines",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Sublevels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "600 coins",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Unique Yoshis",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Ghost houses and 2 Switch palaces",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Moons",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Bonus Games",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 lives in 3 levels (9)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Springs",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Sublevels in 2 worlds (6)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "300.000 Points",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 levels without coins",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 levels all yoshi coins",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Secret Exits",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 vines",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Mount a Blue Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All berries in world 2 (5)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Message Blocks in world 2 (5)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Secret Exits on world 2",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All structures in World 2 (4)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins of 3 levels in 2 worlds (6)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both exits of 2 levels in 2 worlds (4)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Collect a 50 coins in 3 different levels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete both exits of 5 levels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete Donut secret 2",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat a disco shell",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Blue Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Red Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Yellow Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit a gray P switch",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit all 3 types of P's",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 4 different types of chucks",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a chuck in 4 levels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Hammer Brother",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star in 3 worlds (Power-up)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 vines",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Castles and 2 Switch Palaces",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Starworld entrances",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Sublevels in 3 worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "20 Exits",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "3 Bosses",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Structures",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "8 levels all yoshi coins",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Sublevels",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Red Switch Palace",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Unlock Special World",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 2 All Exits (15)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Ghost Houses",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 lives in 4 levels (12)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Switch Palaces",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 vines in 2 worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Springs",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "500.000 Points",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Secret Exits",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Message Blocks in Special World (1)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All springs in world 3 (2)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All vines in starworld (1)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All vines in world 3 (5)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both exits of 1 level in 3 worlds (3)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both exits of 3 levels in 2 worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both exits of 5 levels (No Star World)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete both exits of 7 levels",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed all yoshis",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit a note block",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a chuck in 2 levels of world 3",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Lakitu in a pipe",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a splitting chuck",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 20 Pipes",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in world 3",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Unique Yoshis",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 P-Balloon in 2 levels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Yump OR 3 Switch Palaces",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Sublevels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "25 Exits",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Sumo Bro",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Starworld All Exits (10) OR 1 Fortress",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Autoscroller, No Shortcuts",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star in 4 worlds (Power-up)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Die to Lava in 3 Worlds",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 Enemies with 1 Yellow Yoshi Stomp",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Red Switch Palace OR Unlock Special World",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Secret Exits",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1000 coins",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Castles",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Moons",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Bosses",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Structures",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "10 levels all yoshi coins",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives from Bonus blocks",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 levels without coins",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All berries in one level of the special world",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Structures in World 3 (4)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All sublevels in World 3 (4)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All vines on special world (6)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins of 3 levels in 3 worlds (9)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both exits of 2 levels in 3 worlds (6)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle door 1 and 5",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle doors 2 and 6",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle doors 3 and 7",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle doors 4 and 8",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Collect a 50 coins in 4 different levels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete both exits of 9 levels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat a Blargg (Lava enemy)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit 2 grays P switches",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 chucks in 3 worlds",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a bouncing chuck",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Pokey in 2 different levels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Pufferfish",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Die to Lava in 4 Worlds",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Star World 5 AND Vanilla Dome 1 (Both Exits)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 30 Pipes",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "10 Unique Yoshis",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Sublevel in 4 worlds (4)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "14 vines",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in special world",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 lives in world 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "50 Total Lives",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 3 All Exits (14)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yoshi wings on Cheese Bridge Area",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Starworld entrances",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "30 Exits",
                "difficulty": 6,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "4 Castles",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Moons",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Bosses",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Reach Castle 4 from Butterbridge",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Reach Castle 4 from Cookie Mountain",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yoshi wings on Way Cool",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "9 Structures",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All berries in world 4 (2)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All springs in special world (3)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All sublevels in special world (2)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All vines in world 4 (1)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All yoshi coins of 2 levels in 4 worlds (8)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Beat the game",
                "difficulty": 6,
                "type": "beatGame",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle all doors",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Forest of Illusion 1 (Both exits)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a chuck in 2 levels of special world",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins of 1 Level in 5 Worlds (5)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat a Disco Shell in 3 Worlds",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat a Wiggler",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Star World Entrance in World 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Vanilla Dome 4 OR Castle 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "? at Goal Post",
                "difficulty": 7,
                "type": "or",
                "min": "1 Star",
                "max": "50 Stars"
            },
            {
                "name": "99 Total Lives",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "\"111\" on Timer at Level End",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star in 5 Worlds (Power-up)",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Autoscrollers, No Shortcuts",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat 22 Koopas in Star World 4",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Tubular no P Balloon",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "22 Fireball Kills in Donut Plains 1",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Levels as Small Mario (No Star World)",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Special World All Exits (8)",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Donut Plains 3 and 4, no cape",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Game over",
                "difficulty": 7,
                "type": "gameOver",
                "min": null,
                "max": null
            },
            {
                "name": "2000 coins",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives in one jump",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 P-Balloon in 3 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Structures",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "12 Levels All Yoshi Coins",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "35 Exits",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Switch Palaces OR 4 Ghost Houses",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Moons",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Springs in Special World (3)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Springs in World 5 (3)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins of 1 Level in 6 Worlds (6)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Blue Switch Palace",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits of 1 Level in 4 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle All Doors",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 1 Chuck in 6 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Galoomba in 2 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill a Whistling Chuck",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 3 Urchins in Forest of Illusion 2",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Mondo AND Vanilla Secret 3",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Fortresses",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All 1-Ups in Forest Secret Area (4)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Levels All Yoshi Coins in World 5",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Castle 5",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Forest of Illusion 4 AND Way Cool",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Special World All Exits (8)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 4 All Exits (7)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            }
        ]
    },
    {
        "version": "1.1",
        "items": [
            {
                "name": "Bowser Doors ? AND ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? AND ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? AND ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Doors ? AND ?",
                "difficulty": 5,
                "type": "bowserDoor",
                "min": null,
                "max": null
            },
            {
                "name": "? Message Blocks",
                "difficulty": 1,
                "type": "dynamic",
                "min": 4,
                "max": 8
            },
            {
                "name": "? Message Blocks",
                "difficulty": 2,
                "type": "dynamic",
                "min": 12,
                "max": 15
            },
            {
                "name": "Enter ? Pipes",
                "difficulty": 3,
                "type": "dynamic",
                "min": 18,
                "max": 22
            },
            {
                "name": "Enter ? Pipes",
                "difficulty": 5,
                "type": "dynamic",
                "min": 27,
                "max": 30
            },
            {
                "name": "? Exits",
                "difficulty": 2,
                "type": "dynamic",
                "min": 9,
                "max": 12
            },
            {
                "name": "? Exits",
                "difficulty": 3,
                "type": "dynamic",
                "min": 13,
                "max": 17
            },
            {
                "name": "? Exits",
                "difficulty": 4,
                "type": "dynamic",
                "min": 18,
                "max": 22
            },
            {
                "name": "? Exits",
                "difficulty": 5,
                "type": "dynamic",
                "min": 23,
                "max": 27
            },
            {
                "name": "? Exits",
                "difficulty": 6,
                "type": "dynamic",
                "min": 28,
                "max": 32
            },
            {
                "name": "? Exits",
                "difficulty": 8,
                "type": "dynamic",
                "min": 33,
                "max": 37
            },
            {
                "name": "? Levels All Yoshi Coins",
                "difficulty": 1,
                "type": "dynamic",
                "min": 2,
                "max": 4
            },
            {
                "name": "? Levels All Yoshi Coins",
                "difficulty": 3,
                "type": "dynamic",
                "min": 5,
                "max": 7
            },
            {
                "name": "? Levels All Yoshi Coins",
                "difficulty": 5,
                "type": "dynamic",
                "min": 8,
                "max": 10
            },
            {
                "name": "? Levels All Yoshi Coins",
                "difficulty": 8,
                "type": "dynamic",
                "min": 11,
                "max": 13
            },
            {
                "name": "? Structures",
                "difficulty": 2,
                "type": "dynamic",
                "min": 3,
                "max": 4
            },
            {
                "name": "? Structures",
                "difficulty": 3,
                "type": "dynamic",
                "min": 5,
                "max": 6
            },
            {
                "name": "? Structures",
                "difficulty": 6,
                "type": "dynamic",
                "min": 7,
                "max": 8
            },
            {
                "name": "? Structures",
                "difficulty": 8,
                "type": "dynamic",
                "min": 9,
                "max": 10
            },
            {
                "name": "? Structures",
                "difficulty": 9,
                "type": "dynamic",
                "min": 11,
                "max": 12
            },
            {
                "name": "? Levels Without Coins",
                "difficulty": 3,
                "type": "dynamic",
                "min": 2,
                "max": 3
            },
            {
                "name": "? Levels Without Coins",
                "difficulty": 5,
                "type": "dynamic",
                "min": 4,
                "max": 5
            },
            {
                "name": "? At Goal Post",
                "difficulty": 7,
                "type": "or",
                "min": "1 Star",
                "max": "50 Stars"
            },
            {
                "name": "Collect 50 Coins In ? Levels",
                "difficulty": 3,
                "type": "dynamic",
                "min": 2,
                "max": 3
            },
            {
                "name": "Die To Lava In ? Worlds",
                "difficulty": 5,
                "type": "dynamic",
                "min": 3,
                "max": 4
            },
            {
                "name": "? Unique Yoshis",
                "difficulty": 5,
                "type": "dynamic",
                "min": 8,
                "max": 10
            },
            {
                "name": "2 Ghost Houses ? 2 Switch Palaces",
                "difficulty": 2,
                "type": "or",
                "min": "AND",
                "max": "OR"
            },
            {
                "name": "4 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "6 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "8 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "10 Message Blocks",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "12 Message Blocks",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "15 Message Blocks",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "1 Bonus Game",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Castle",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Level As SmAll Mario (No Star World)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Switch Palace",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Total Lives",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "100,000 Points",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Levels All Yoshi Coins",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Levels Without Coins",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Unique Yoshis",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "200 Coins",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Subareas",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Exits",
                "difficulty": 1,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In World 1",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Berries In World 1 (22)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Subareas In World 1 (4)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins In World 1",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete Both Exits Of A Level",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 Different Types Of Chucks",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Pokey",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 1 All Exits (6)",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yellow Switch Palace",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "0 Lives In Bonus Game",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Ghost House",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Life From A Bonus Block",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Moon",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star World Entrance",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Exits",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Ghost Houses AND 2 Switch Palaces",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Ghost Houses OR 2 Switch Palaces",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Levels All Yoshi Coins In World 2",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Lives In 3 Levels (6)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Springs",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Structures",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Subareas In 2 Worlds (4)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "200,000 Points",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Secret Exits",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Vines",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Levels All Yoshi Coins",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "4 Structures",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "4 Unique Yoshis",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In World 2",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 1 Level In 2 Worlds (2)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 2 Levels In 2 Worlds (4)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Collect 50 Coins In 2 Different Levels",
                "difficulty": 2,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Complete Both Exits Of 3 Levels",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 10 Pipes",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Green Switch Palace",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 3 Different Types Of Chucks",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Non-Boss Big Boo",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Swoop (Bat)",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Top Secret Area",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star In 2 Worlds (Power-Up)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "15 Exits",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "2 Castles",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Lives From Bonus Blocks",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Moons",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "25 Total Lives",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Bonus Games",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Levels Without Coins",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives In 3 Levels (9)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Springs",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Subareas In 2 Worlds (6)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "350,000 Points",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Levels Without Coins",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "4 Vines In A World",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In Star World",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Vines",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Levels All Yoshi Coins",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "6 Secret Exits",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Subareas",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Unique Yoshis",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "600 Coins",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Vines",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Berries In World 2 (5)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Message Blocks In World 2 (5)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Secret Exits In World 2",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Structures In World 2 (4)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 3 Levels In 2 Worlds (6)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 2 Levels In 2 Worlds (4)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Collect 50 Coins In 3 Different Levels",
                "difficulty": 3,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Complete Both Exits Of 5 Levels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Donut Secret 2",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Disco Shell",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Blue Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Red Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Feed Yellow Yoshi",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit A Gray P-Switch",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit All 3 Types Of P's",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 4 Different Types Of Chucks",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Chuck In 4 Levels",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Hammer Brother",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Auto-Scroller, No Subareas",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star In 3 Worlds (Power-Up)",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star In 4 Worlds (Power-Up)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Vines",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Castles And 2 Switch Palaces",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Star World Entrances",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Subareas In 3 Worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "20 Exits",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "3 Bosses",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Ghost Houses",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives In 4 Levels (12)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Vines In 2 Worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Springs",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "6 Structures",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "8 Levels All Yoshi Coins",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "8 Secret Exits",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Subareas",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Springs In World 3 (2)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Vine In Star World 5",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Vines In World 3 (5)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 1 Level In 3 Worlds (3)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 3 Levels In 2 Worlds (6)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 5 Levels (No Star World)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 7 Levels",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Die To Lava In 3 Worlds",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 20 Pipes",
                "difficulty": 4,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Feed All 5 Yoshis",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Hit A Note Block",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 Enemies With 1 Yellow Yoshi Stomp",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Chuck In 2 Levels Of World 3",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Lakitu In A Pipe",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Splitting Chuck",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Red Switch Palace OR Unlock Special World",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 2 All Exits (15)",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 P-Balloon In 2 Worlds",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Yump OR 3 Switch Palaces",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Levels All Yoshi Coins",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "10 Secret Exits",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Subareas",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1,000 Coins",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "25 Exits",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "3 Castles",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives From Bonus Blocks",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Moons",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Bosses",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Levels Without Coins",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In World 3",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "8 Structures",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "9 Unique Yoshis",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "All Subareas In World 3 (4)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Message Block (1) AND Vines (6) In Gnarly",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 3 Levels In 3 Worlds (9)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 6 Level In 1 Worlds (6)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 2 Levels In 3 Worlds (6)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle Door 1 AND 5",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle Doors 2 AND 6",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle Doors 3 AND 7",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle Doors 4 AND 8",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Collect 50 Coins In 4 Different Levels",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Complete Both Exits Of 9 Levels",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Die To Lava In 4 Worlds",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Blargg (Lava Enemy)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Enter 30 Pipes",
                "difficulty": 5,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "Hit 2 Gray P-Switches",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 2 Chucks In 3 Worlds",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Bouncing Chuck",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Pufferfish",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Star World 5 AND Vanilla Dome 1 (Both Exits)",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Star World All Exits (10) OR 1 Fortress",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yoshi Wings In Way Cool",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 SubLevel In 4 Worlds (4)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "14 Vines",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Star World Entrances",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "30 Exits",
                "difficulty": 6,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "4 Castles",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Moons",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Bosses",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In Special World",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Lives In World 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "50 Total Lives",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "500,000 Points",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "9 Structures",
                "difficulty": 6,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "All Berries In Cookie Mountain (2)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Subareas In Special World (2)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Vine In Cookie Mountain (1)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 1 Level In 5 Worlds (5)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 2 Levels In 4 Worlds (8)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Disco Shell In 3 Worlds",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Wiggler",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Chuck In 2 Levels Of Special World",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Pokey In 2 Levels",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Sumo Bro",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Reach Castle 4 From Butter Bridge",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Reach Castle 4 From Cookie Mountain",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Star World Entrance In World 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Castle 3 OR Castle 4",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 3 All Exits (14)",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Yoshi Wings On Cheese Bridge Area",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "\"111\" On Timer At Level End",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 At Goal Post",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 Star In 5 Worlds (Power-Up)",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Auto-Scrollers, No Subareas",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1,500 Coins",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "13 Fireball Kills In Vanilla Dome 1",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Levels as Small Mario (No Star World)",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "3 Lives In One Jump",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "50 At Goal Post",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "99 Total Lives",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Beat The Game",
                "difficulty": 7,
                "type": "beatGame",
                "min": null,
                "max": null
            },
            {
                "name": "Donut Plains 1-4, No Cape Or Fire Flower",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat 22 Koopas In Star World 4",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Game Over",
                "difficulty": 7,
                "type": "gameOver",
                "min": null,
                "max": null
            },
            {
                "name": "Tubular No P-Balloon",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "1 P-Balloon In 3 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 Structures",
                "difficulty": 8,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "12 Levels All Yoshi Coins",
                "difficulty": 8,
                "type": "replaced",
                "min": null,
                "max": null
            },
            {
                "name": "35 Exits",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Ghost Houses",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Moons",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Springs In Special World (3)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Springs In World 5 (3)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins Of 1 Level In 6 Worlds (6)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Blue Switch Palace OR 14 Unique Yoshis",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Exits Of 1 Level In 4 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Bowser Castle All Doors",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 1 Chuck In 6 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Galoomba In 2 Worlds",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Whistling Chuck",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 5 Urchins In Forest Of Illusion 2",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Groovy AND Vanilla Secret 3",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Special World All Exits (8)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Fortresses",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All 1-Ups In Forest Secret Area (4)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Berries Special World (29)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Secret Exits In World 5 (5)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "All Yoshi Coins In 4 Levels Of World 5",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Castle 5 OR Forest Fortress",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Forest Ghost House AND Way Cool",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "World 4 All Exits (7)",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "5 Castles",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat A Wiggler In 2 Worlds",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "10 1-Up Mushrooms",
                "difficulty": 2,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "35 1-Up Mushrooms",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "750,000 Points",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Water Levels",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "7 Water Levels",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Both Ice Levels",
                "difficulty": 6,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Eat All 4 Koopa Colors In 1 Level",
                "difficulty": 3,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Unlock Special World the Intended Way",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "12 Structures",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 3 Types Of Lakitus In Forest Of Illusion 4",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill A Hammer Bro In 2 Worlds",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "4 Star World Entrances",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Structures In World 5",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "2 Structures In 3 Worlds",
                "difficulty": 4,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill All Climbing Koopas (46)",
                "difficulty": 8,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 21 Climbing Koopas",
                "difficulty": 5,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Kill 8 Climbing Koopas",
                "difficulty": 1,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Chocolate Island 1",
                "difficulty": 9,
                "type": "static",
                "min": null,
                "max": null
            },
            {
                "name": "Complete 1-Up Chambers In Castles 2 AND 4",
                "difficulty": 7,
                "type": "static",
                "min": null,
                "max": null
            }
        ]
    }
]

