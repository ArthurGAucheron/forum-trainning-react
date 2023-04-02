import {PostInterface} from "./post-interface";

export const MOCK_POSTS: PostInterface[] = [
    {
        id:1,
        voteCount:15,
        image:'/post-asset/compressed/nourriture1.webp',
        authorName:'Alice',
        creationDate : new Date('2023-03-01T10:30:00').toISOString(),
        title : "I love meet",
        content :'Ceci est le contenu du premier postComponent.',
        authorAvatar : '/post-asset/compressed/avatar1.webp',
    },
    {
        id:2,
        voteCount:42,
        image:'/post-asset/compressed/nourriture2.webp',
        authorName:'Bob',
        creationDate : new Date('2023-03-15T14:00:00').toISOString(),
        title :'Deuxième postComponent',
        content :'Ceci est le contenu du deuxième postComponent.',
        authorAvatar :'/post-asset/compressed/avatar2.webp',
    },
    {

        id:3,
        voteCount:27,
        image:'/post-asset/compressed/nourriture3.webp',
        authorName:'Caroline',
        creationDate : new Date('2023-03-20T18:15:00').toISOString(),
        title :'Troisième postComponent',
        content :'Ceci est le contenu du troisième postComponent.',
        authorAvatar :'/post-asset/compressed/avatar3.webp',

    },
    {
        id:4,
        voteCount:34,
        image:'/post-asset/compressed/nourriture4.webp',
        authorName:'David',
        creationDate : new Date('2023-03-25T21:30:00').toISOString(),
        title :'Quatrième postComponent',
        content :'Ceci est le contenu du quatrième postComponent.',
        authorAvatar :'/post-asset/compressed/avatar4.webp'
    },
];
