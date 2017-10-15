import * as types from './actionTypes';

var feedbacks = [
    {
        author: 'Adam Hicks',
        position: 'Chief Technology Officer at Contact Group',
        text: 'Boyan worked within our team as part of a summer placement. He was quick to pick' +
                ' up new technologies and worked hard. Whilst working for our team he mainly focu' +
                'ssed on .NET/C# development and JavaScript. He is friendly and an approachable c' +
                'hap and would make a great addition to any development team. It was a pleasure t' +
                'o work with him.',
        date: 'August 28, 2017',
        image: 'https://media.licdn.com/media/p/1/000/029/086/274739f.jpg',
        linkedin: 'https://www.linkedin.com/in/adamkaihicks/',
        page: 1
    }, {
        author: 'Neeraj Laad',
        position: 'Lead Technical Architect / Project Manager at PTC, IBM',
        text: 'I have been very impressed with the work and the attitude Boyan have demonstrate' +
                'd here (at PTC) especially with picking up ClaaS work with very limited impact o' +
                'n the rest of the team. I was also happy that Boyan took ownership of the newsle' +
                'tter editing as an additional responsibility when he was still figuring out the ' +
                'rest of the work. I would like Boyan to carry on with this and take more ownersh' +
                'ip of the work that you pick up and deliver value to our customers.',
        date: 'August 4, 2017',
        image: 'https://media.licdn.com/media/p/1/000/06a/0d4/15f889f.jpg',
        linkedin: 'https://www.linkedin.com/in/neeraj-laad-3729244/',
        page: 1
    }, {
        author: 'Michal Goly',
        position: 'Software Enginner at PTC, IBM - 2016/2017',
        text: "When Boyan first joined he has jumped straight into CLaaS development, and the J" +
                "avaScript experience he has already had allowed him to contribute code on his se" +
                "cond or third day which was quite impressive to see. His curiosity and excitemen" +
                "t about the tool was very evident as we pair programmed on many occasions. We th" +
                "en started working on the PAT tool, and overall I think he managed to handle the" +
                " steep Yii 2 PHP Framework learning curve fairly well. He took ownership of the " +
                "SFTP external accounts feature, which was the major functional addition to PAT d" +
                "uring that sprint. You have managed to design the flow and presented it to the c" +
                "lient and had her interest in mind throughout the development.",
        date: 'August 7, 2017',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkJAAAAJGVkM2VkN2I' +
                '2LTNlMTgtNGU4Ny04NTk5LTE3ZDNhYzBjOGViOA.jpg',
        linkedin: 'https://www.linkedin.com/in/michalgoly/',
        page: 2
    }, {
        author: 'Alexander Penev',
        position: 'Head Assistant Professor, PhD at University of Plovdiv',
        text: 'While working together, Boyan impressed me with his intelligence and knowledge, ' +
                'together with an analytical and hungry mind. He proved to be a fast and efficien' +
                't learner, capable of internalizing new concepts and applying both abstraction a' +
                'nd concretization in order to solve the problem under consideration. In addition' +
                ', Boyan is dedicated and hard-working, and has a clear vision of his professiona' +
                'l goals as well as the perseverance to follow through on them. On the interperso' +
                'nal side, Boyan gets along very well with the members of our work group. He has ' +
                'a positive attitude and the ability to adapt effectively to new environments tha' +
                't are inspiring to everybody he meets. He is willing to accept responsibility an' +
                'd has a strong sense of loyalty and ethics, which allows him to work well in a t' +
                'eam.',
        date: 'September 24, 2014',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJaAAAAJGIxMzYwNTg' +
                '0LTIwYmUtNDgwZi1hN2Y0LTgxNjcwZDQ1ZjUyZQ.jpg',
        linkedin: 'https://www.linkedin.com/in/alexander-penev-772b2b5/',
        page: 2
    }
];

export function showFeedback() {
    return ({type: types.SHOW_FEEDBACK, feedbacks: feedbacks});
}

export function checkFeedback(technologies) {
    let count = 0;

    feedbacks.forEach(function (feedback) {
        technologies
            .forEach(function (tech) {
                feedback
                    .text
                    .split(" ")
                    .forEach(function (feedb) {
                        if (feedb.replace(',', ' ').toLowerCase().includes(tech)) {
                            if (feedb.replace(',', '').toLowerCase() !== tech && feedb.replace(',', '').toLowerCase().includes('javascript')) {
                                count += 0;
                            } else {
                                count += 1;
                            }
                        }
                    }, this);
            }, this);
    }, this);

    return ({type: types.CHECK_FEEDBACK, countFeedback: count});
}