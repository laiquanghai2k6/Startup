import { AddNewFeed } from "../../src/slice/newFeedSlice";
import { USERS } from "./userStory";
export const POSTS: AddNewFeed[] = [
    {
        imageUrl:
        'https://i.pinimg.com/originals/ac/3f/72/ac3f727c2812111a957ca7a641fdce82.jpg',
    
    
        user:USERS[0].user,
        like:6969,
        caption:'GG 🐧🐧',
        profilePicture:USERS[0].image,
        comments:[
            {
                user:USERS[1].user,
                comment:'Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ. Bằng cách kiểm tra tính chẵn, lẻ ta có y = cot4x là một hàm số lẻ.',
            },
            {
                user:USERS[2].user,
                comment:'This is so cool guys!',
            },
            {
                user:USERS[3].user,
                comment:'This is so cool guys!',
            },
        ],
        num:1,
        linkingCourse:{
            name:'Toan Hoc by Neon',
            online:false,
            subject:'Toán học'
        }
    },
    {
        imageUrl:'https://th.bing.com/th/id/OIP.WqjMFarOqWq8xoY9oaBh9gHaJ4?pid=ImgDet&rs=1',

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
        num:2,
        linkingCourse:{
            name:'Toan Hoc by Neon',
            online:true,
            subject:'Toán học'
        }
    },
    
]