import * as types from './actionTypes';

var hobbies = [
    {
        name: 'Football',
        text: 'I am a huge fan of football. I am a Manchester United fan since 2008 when the cl' +
                'ub won the Champions League final in Moscow, beating Chelsea on penelties. Howev' +
                'er, it is not all about United, I just love the game and the entertainment that ' +
                'it brings me. If we share the same interest, please do contact me - I would be m' +
                'ore than happy to have a chat about the most famous game in the world.',
        image: 'old-trafford.jpg',
        page: 5
    }, {
        name: 'Gym',
        text: 'I have always wanted to become well-built. I have trained different sports since' +
                ' I was a kid - karate, football, badminton, etc. Neither went as I expected. How' +
                'ever, I have recently found something that showed me amazing results and maybe t' +
                'hat is what keeps me motivated and passionated about it - gym exercises. I have ' +
                'been training for couple of months now and I changed two different training prog' +
                'rammes so I can imporve my body more. I am going to the gym afer I finish work, ' +
                'four times per week and after every training I feel much relieved and that bring' +
                's me huge ammount of happiness.',
        image: 'gym.jpg',
        page: 4
    }, {
        name: 'Cooking',
        text: 'I was really bad in the kitchen before I moved to UK. Why? - I had my amazing mo' +
                'm cooking for me. I must be honest, those were the best years for my stomach. Ho' +
                'wever, once I started my first year at the university, the cook in me has risen.' +
                ' I started with some simple things, increasing the difficulty step by step until' +
                ' I have reached a level good enough to actually enjoy what I am doing. I started' +
                ' cooking once in a while for my frinds who are saying that I make one of the bes' +
                't \'Musaka\' (traditional mediterranean meal) they have ever eaten.',
        image: 'cooking.jpg',
        page: 3
    }, {
        name: 'Hackathons',
        text: 'After  my family and my friends, there is one more thing that I love - going to ' +
                'hackathons. The amount of experience I gain on those events for just two days is' +
                ' marvelous. I enjoy exploring new technologies and hackathons are the best place' +
                ' to do that. Moreover, you can come up with so many amazing ideas . I have atten' +
                'ded many hackathonts so far - couple of BrumHacks, HackNotts, Facebook Hacakthon' +
                ' and others.',
        image: 'hackathons.jpg',
        page: 1
    }, {
        name: 'Reading (listening to audio) books',
        text: 'That has been a recent hobby of mine. I started listening to audio books, using ' +
                'Audible, for the last couple of months. I must say that the time I spent for get' +
                'ting so much information, out of a book, is much less than I had ever imagined. ' +
                ' So far, I have read The Lost Symbol and The Girl with the Dragon Tattoo. At the' +
                ' moment, I am reading Soft Skills: The Software Developer\'s Life Manual now.',
        image: 'audiobooks.jpg',
        page: 2
    }
];

export function checkHobbies(technologies) {
    let count = 0;

    hobbies.forEach(function (hobby) {
        technologies
            .forEach(function (tech) {
                hobby
                    .text
                    .split(" ")
                    .forEach(function (t) {
                        if (t.replace(',', ' ').toLowerCase().includes(tech)) {
                            count += 1;
                        }
                    }, this);
            }, this);
    }, this);

    return ({type: types.CHECK_HOBBIES, countHobbies: count});
}

export function showHobbies() {
    return ({type: types.SHOW_HOBBIES, hobbies: hobbies});
}