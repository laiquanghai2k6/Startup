import { AddNewFeed } from "../../src/screens/NewFeedScreen/newFeedSlice";
import { USERS } from "./userStory";
export const POSTS: AddNewFeed[] = [
    {
        imageUrl:'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/305811964_3300138160269964_7512288889666441498_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_SLBBokH8csAX8UovD9&_nc_ht=scontent.fhph1-3.fna&oh=03_AVJh9gElE1WD8wdk4ij_QDV-qyyO9jYIwxBJ2bmyRKc0zA&oe=6340B491',
        user:USERS[0].user,
        like:6.969,
        caption:'I AM DEV LỎ AHAHAHAH 🐧🐧',
        profilePicture:USERS[0].image,
        comments:[
            {
                user:USERS[1].user,
                comment:'Wow! Bro you look gud',
            },
            {
                user:USERS[2].user,
                comment:'This is so cool guys!',
            },
        ],
    },
    {
        imageUrl:'https://th.bing.com/th/id/R.673b7b3a8667916cd9c768b04e5729ae?rik=HiS4T2wY2A299w&pid=ImgRaw&r=0',
        user:USERS[3].user,
        like:9696,
        caption:'Super Idol?',
        profilePicture:USERS[3].image,
        comments:[
            {
                user:USERS[0].user,
                comment:'WOW!'
            },
            {
                user:USERS[4].user,
                comment:'?',
            }
        ]
    },
    
]