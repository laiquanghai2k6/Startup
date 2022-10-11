import { AddNewFeed } from "../../src/slice/newFeedSlice";
import { USERS } from "./userStory";
export const POSTS: AddNewFeed[] = [
    {
        imageUrl:
        'https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/304864110_778422656815483_1118918160762764963_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4RQSUVcGg5kAX96BXLA&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8Oi4MbGWUx29r-qD1n4y7ERDmy7izy7O-UQgwyr_GiRg&oe=634188C1',
        user:USERS[0].user,
        like:6969,
        caption:'GG 🐧🐧',
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
        num:1
    },
    {
        imageUrl:         'https://th.bing.com/th/id/OIP.WqjMFarOqWq8xoY9oaBh9gHaJ4?pid=ImgDet&rs=1',

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
        ],
        num:2
    },
    
]