import { ChatGroupType, ChatType } from '../../src/slice/MessengerSlice';

export interface t {
    username: string,
    image: string
}
export interface Users{
    user:t[]
    num:number | undefined
}


export interface ChatGroup {
    users: Users,
    chat: ChatGroupType,
    groupImage: string,
    groupName: string,
}
export const CHATSGROUP: ChatGroup[] = [
    {
        groupName: 'FUCKOFFGROUP',
        groupImage:
            'https://th.bing.com/th/id/R.2686450d080d614919a11f03938ae3d6?rik=s9ZY%2bZhzxJ4wZw&pid=ImgRaw&r=0',
        users: {
            num:1,
            user:[{
            username: 'neonlaideptrai',
            image:
                'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',
            
        },{
            username: 'lqhpro',
            image:
            'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/305787495_1686778681709169_8459930738253808315_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I6uTY4WX8_YAX_ixnB7&_nc_ht=scontent.fhph1-2.fna&oh=03_AVJolBH1S9KPUBm3GB-REkeB89s_AOTmPM7H-sdNNv5y-w&oe=6341E3B4',
    }]
},
        chat: {
            num: 1,
            mes: [
                {
                    imgUser: 
                    '',

                    key: 1,
                    message: 'bro1',
                    type:'mes'
                },
                {
                    imgUser: 
                    'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',


                    key: 2,
                    message: 'non-1',
                    type:'mes'

                },
                {
                    imgUser: 
                    'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/305787495_1686778681709169_8459930738253808315_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I6uTY4WX8_YAX_ixnB7&_nc_ht=scontent.fhph1-2.fna&oh=03_AVJolBH1S9KPUBm3GB-REkeB89s_AOTmPM7H-sdNNv5y-w&oe=6341E3B4',


                    key: 2,
                    message: 'non v ò bro',
                    type:'mes'

                },
            ]
        }




    },
    {
        groupName: 'FUCKOFFGROUP2',
        groupImage:
            'https://th.bing.com/th/id/OIP.WqjMFarOqWq8xoY9oaBh9gHaJ4?pid=ImgDet&rs=1',
        users: 
        {num:2,

        user:[{
            username: 'neonlaideptrai',
            image:
                'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',

        },{
        username: 'lqhpro',
        image:
        'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/305787495_1686778681709169_8459930738253808315_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I6uTY4WX8_YAX_ixnB7&_nc_ht=scontent.fhph1-2.fna&oh=03_AVJolBH1S9KPUBm3GB-REkeB89s_AOTmPM7H-sdNNv5y-w&oe=6341E3B4',

    }]
},
        chat: {
            num: 2,
            mes: [
                {
                    imgUser: '',

                    key: 1,
                    message: 'bro2',
                    type:'mes'

                },
                {
                    imgUser:
                    'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',


                    key: 2,
                    message: 'non',
                    type:'mes'

                },
                {
                    imgUser:
                    'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/305787495_1686778681709169_8459930738253808315_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I6uTY4WX8_YAX_ixnB7&_nc_ht=scontent.fhph1-2.fna&oh=03_AVJolBH1S9KPUBm3GB-REkeB89s_AOTmPM7H-sdNNv5y-w&oe=6341E3B4',


                    key: 2,
                    type:'mes',
                    message: 'đần',
                },
            ]
        }




    },

]
