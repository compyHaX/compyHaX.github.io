const OldDifficulty = [
    { 
        name: "Very Easy", 
        css: "--very-easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 2, 2,
            2, 2, 2, 2, 3,
         ]
    },
    { 
        name: "Easy", 
        css: "--easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 2, 2, 2,
            2, 2, 2, 2, 2,
            2, 3, 3, 3, 3,
            3, 3, 3, 3, 4,
         ]
    },
    { 
        name: "Normal", 
        css: "--normal",
        dist: [ 
            1, 1, 1, 1, 1,
            2, 2, 2, 2, 2,
            2, 2, 3, 3, 3,
            3, 3, 3, 3, 3,
            3, 3, 4, 4, 5,
         ]
    },
    { 
        name: "Hard", 
        css: "--hard",
        dist: [ 
            1, 1, 1, 2, 2,
            2, 2, 3, 3, 3,
            3, 3, 3, 4, 4,
            4, 4, 4, 5, 5,
            5, 5, 6, 6, 7,
         ]
    },
    { 
        name: "Very Hard", 
        css: "--very-hard",
        dist: [ 
            1, 2, 2, 3, 3,
            3, 3, 3, 3, 3, 
            4, 4, 4, 4, 4,
            4, 5, 5, 5, 5,
            6, 6, 6, 6, 7,
         ]
    },
    { 
        name: "Extreme", 
        css: "--extreme",
        dist: [ 
            2, 2, 3, 3, 3,
            3, 4, 4, 4, 4,
            5, 5, 5, 5, 5,
            5, 6, 6, 6, 6,
            6, 7, 7, 7, 7,
         ]
    },
    { 
        name: "Insane", 
        css: "--insane",
        dist: [ 
            3, 3, 3, 4, 4,
            4, 4, 4, 4, 5,
            5, 5, 5, 5, 6,
            6, 6, 6, 6, 6, 
            6, 7, 7, 7, 7,
         ]
    },
];

const Difficulty = [
    { 
        name: "Very Easy", 
        css: "--very-easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 2, 2, 2,
            2, 2, 2, 3, 3,
         ],
         type: "difficulty",
    },
    { 
        name: "Easy", 
        css: "--easy",
        dist: [ 
            1, 1, 1, 1, 1,
            1, 1, 2, 2, 2,
            2, 2, 2, 2, 2,
            2, 3, 3, 3, 3,
            3, 3, 3, 3, 4,
         ],
         type: "difficulty",
    },
    { 
        name: "Normal", 
        css: "--normal",
        dist: [ 
            1, 1, 1, 1, 1,
            2, 2, 2, 2, 2,
            2, 2, 3, 3, 3,
            3, 3, 3, 3, 3,
            3, 3, 4, 4, 5,
         ],
         type: "difficulty",
    },
    { 
        name: "Hard", 
        css: "--hard",
        dist: [ 
            1, 1, 1, 1, 2,
            2, 2, 2, 2, 3,
            3, 3, 3, 3, 3,
            3, 3, 4, 4, 4,
            4, 5, 5, 5, 6,
         ],
         type: "difficulty",
    },
    { 
        name: "Very Hard", 
        css: "--very-hard",
        dist: [ 
            1, 1, 1, 2, 2,
            2, 2, 3, 3, 3, 
            3, 3, 3, 4, 4,
            4, 4, 4, 5, 5,
            5, 5, 6, 6, 7,
         ],
         type: "difficulty",
    },
    { 
        name: "Extreme", 
        css: "--extreme",
        dist: [ 
            1, 2, 2, 3, 3,
            3, 3, 4, 4, 4,
            4, 4, 4, 4, 5,
            5, 5, 5, 5, 6,
            6, 4, 4, 7, 7,
         ],
         type: "difficulty",
    },
    { 
        name: "Insane", 
        css: "--insane",
        dist: [ 
            1, 3, 3, 3, 4,
            4, 4, 4, 4, 4,
            5, 5, 5, 5, 5,
            6, 6, 6, 6, 6, 
            6, 6, 7, 7, 7,
         ],
         type: "difficulty",
    },
    {
        name: "Balanced",
        css: "--balanced",
        dist: [
            1, 1, 1, 1, 2,
            2, 2, 2, 3, 3,
            3, 3, 4, 4, 4,
            4, 5, 5, 5, 5,
            6, 6, 6, 6, 7,
        ],
        type: "difficulty",
    },
    {
        name: "Random Difficulty",
        css: "--random",
        dist: [],
        type: "random",
    },
    {
        name: "All Random",
        css: "--all-random",
        dist: [],
        type: "all-random",
    }
];