const difficulties = [
    {
        "version": "1.0",
        "difficulty": [
            {
                "name": "Goomba",
                "nickname": "Very Easy",
                "icon": "goomba.gif",
                "css": "--very-easy",
                "worlds": "W1 - W2",
                "extras": "✮",
                "dist": [ 1, 1, 1, 1, 1,
                          1, 1, 1, 1, 1,
                          1, 1, 1, 1, 1,
                          1, 1, 2, 2, 2,
                          2, 2, 2, 3, 3
                ],
                "type": "difficulty"
            },
            {
                "name": "Koopa",
                "nickname": "Easy",
                "icon": "koopa.gif",
                "css": "--easy",
                "worlds": "W1 - W3",
                "extras": "✮",
                "dist": [ 1, 1, 1, 1, 1,
                          1, 1, 1, 2, 2,
                          2, 2, 2, 2, 2,
                          2, 2, 3, 3, 3,
                          3, 3, 3, 3, 4
                ],
                "type": "difficulty"
            },
            {
                "name": "Chargin' Chuck",
                "nickname": "Normal",
                "icon": "chuck.gif",
                "css": "--normal",
                "worlds": "W1 - W3",
                "extras": "✮ - S",
                "dist": [ 1, 1, 1, 1, 1,
                          2, 2, 2, 2, 2,
                          2, 2, 3, 3, 3,
                          3, 3, 3, 3, 3,
                          3, 3, 4, 4, 5
                ],
                "type": "difficulty"
            },
            {
                "name": "Hammer Bro",
                "nickname": "Hard",
                "icon": "hammer.gif",
                "css": "--hard",
                "worlds": "W1 - W4",
                "extras": "✮ - S",
                "dist": [ 1, 1, 1, 1, 2,
                          2, 2, 2, 2, 3,
                          3, 3, 3, 3, 3,
                          3, 3, 4, 4, 4,
                          4, 5, 5, 5, 6
                ],
                "type": "difficulty"
            },
            {
                "name": "Magikoopa",
                "nickname": "Very Hard",
                "icon": "magikoopa.gif",
                "css": "--very-hard",
                "worlds": "W1 - W4",
                "extras": "✮ - S",
                "dist": [ 1, 1, 1, 2, 2,
                          2, 2, 3, 3, 3,
                          3, 3, 4, 4, 4,
                          4, 4, 4, 5, 5,
                          5, 5, 6, 6, 7
                ],
                "type": "difficulty"
            },
            {
                "name": "Reznor",
                "nickname": "Extreme",
                "icon": "reznor.gif",
                "css": "--extreme",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [ 1, 2, 2, 3, 3,
                          3, 3, 4, 4, 4,
                          4, 4, 5, 5, 5,
                          5, 5, 6, 6, 6,
                          6, 7, 7, 8, 8
                ],
                "type": "difficulty"
            },
            {
                "name": "Bowser",
                "nickname": "Absolutely Insane",
                "icon": "bowser.gif",
                "css": "--insane",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [ 2, 3, 3, 4, 4,
                          4, 4, 5, 5, 5,
                          5, 5, 6, 6, 6,
                          6, 6, 7, 7, 7,
                          8, 8, 8, 9, 9
                ],
                "type": "difficulty"
            },
            {
                "name": "Balanced",
                "nickname": "As All Things Should Be",
                "icon": "balanced.gif",
                "css": "--balanced",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [ 1, 1, 1, 2, 2,
                          2, 3, 3, 3, 4,
                          4, 4, 5, 5, 5,
                          6, 6, 6, 7, 7,
                          7, 8, 8, 8, 9
                ],
                "type": "difficulty"
            },
            {
                "name": "Random Difficulty",
                "nickname": "For the Indecisive",
                "icon": "random.gif",
                "css": "--random",
                "worlds": "???",
                "extras": "???",
                "dist": [],
                "type": "random"
            },
            {
                "name": "Pure Random",
                "nickname": "Let's Get Crazy!!!",
                "icon": "chaos.gif",
                "css": "--all-random",
                "worlds": "???",
                "extras": "???",
                "dist": [],
                "type": "all-random"
            }
        ]
    },
    {
        "version": "1.1",
        "difficulty": [
            {
                "name": "Goomba",
                "nickname": "Very Easy",
                "icon": "goomba.gif",
                "css": "--very-easy",
                "worlds": "W1 - W2",
                "extras": "✮",
                "dist": [
                    1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1,
                    1, 1, 2, 2, 2,
                    2, 2, 2, 3, 3
                ],
                "type": "difficulty"
            },
            {
                "name": "Koopa",
                "nickname": "Easy",
                "icon": "koopa.gif",
                "css": "--easy",
                "worlds": "W1 - W3",
                "extras": "✮",
                "dist": [
                    1, 1, 1, 1, 1,
                    1, 1, 1, 2, 2,
                    2, 2, 2, 2, 2,
                    2, 2, 3, 3, 3,
                    3, 3, 3, 3, 4
                ],
                "type": "difficulty"
            },
            {
                "name": "Hammer Bro",
                "nickname": "Normal",
                "icon": "hammer.gif",
                "css": "--normal",
                "worlds": "W1 - W3",
                "extras": "✮ - S",
                "dist": [
                    1, 1, 1, 1, 1,
                    2, 2, 2, 2, 2,
                    2, 2, 3, 3, 3,
                    3, 3, 3, 3, 3,
                    3, 3, 4, 4, 5
                ],
                "type": "difficulty"
            },
            {
                "name": "Chargin' Chuck",
                "nickname": "Hard",
                "icon": "chuck.gif",
                "css": "--hard",
                "worlds": "W1 - W4",
                "extras": "✮ - S",
                "dist": [
                    1, 1, 1, 1, 2,
                    2, 2, 2, 2, 3,
                    3, 3, 3, 3, 3,
                    3, 3, 4, 4, 4,
                    4, 5, 5, 5, 6
                ],
                "type": "difficulty"
            },
            {
                "name": "Magikoopa",
                "nickname": "Very Hard",
                "icon": "magikoopa.gif",
                "css": "--very-hard",
                "worlds": "W1 - W4",
                "extras": "✮ - S",
                "dist": [
                    1, 1, 1, 2, 2,
                    2, 2, 3, 3, 3,
                    3, 3, 4, 4, 4,
                    4, 4, 4, 5, 5,
                    5, 5, 6, 6, 7
                ],
                "type": "difficulty"
            },
            {
                "name": "Reznor",
                "nickname": "Extreme",
                "icon": "reznor.gif",
                "css": "--extreme",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [
                    1, 1, 2, 2, 2,
                    3, 3, 3, 4, 4,
                    4, 4, 5, 5, 5,
                    5, 5, 6, 6, 6,
                    6, 7, 7, 8, 8
                ],
                "type": "difficulty"
            },
            {
                "name": "Bowser",
                "nickname": "Absolutely Insane",
                "icon": "bowser.gif",
                "css": "--insane",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [
                    1, 2, 2, 3, 3,
                    4, 4, 4, 4, 5,
                    5, 5, 5, 6, 6,
                    6, 6, 6, 7, 7,
                    8, 8, 8, 9, 9
                ],
                "type": "difficulty"
            },
            {
                "name": "Balanced",
                "nickname": "As All Things Should Be",
                "icon": "balanced.gif",
                "css": "--balanced",
                "worlds": "W1 - W5",
                "extras": "✮ - S",
                "dist": [
                    1, 1, 1, 2, 2,
                    2, 3, 3, 3, 4,
                    4, 4, 5, 5, 5,
                    6, 6, 6, 7, 7,
                    8, 8, 8, 9, 9
                ],
                "type": "difficulty"
            },
            {
                "name": "Random Difficulty",
                "nickname": "For the Indecisive",
                "icon": "random.gif",
                "css": "--random",
                "worlds": "???",
                "extras": "???",
                "dist": [],
                "type": "random"
            },
            {
                "name": "Pure Random",
                "nickname": "Let's Get Crazy!!!",
                "icon": "chaos.gif",
                "css": "--all-random",
                "worlds": "???",
                "extras": "???",
                "dist": [],
                "type": "all-random"
            }
        ]
    }
]
