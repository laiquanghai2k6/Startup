
import {QUIZ,RATE} from './subject'

export interface COURSEOFFLINE{
    type:string,
    name:string,
    quiz:QUIZOFFLINE[],
    hard:number,
}
export interface QUIZOFFLINE{
    quizImage:string
    answer: Array<string>
    CorrectAnswer:string,
    solution:string
}

export interface SUBJECTOFFLINE{
    name:string,
    courses:COURSEOFFLINE[],
    icon:string,
    id:string,
    num:number


}


export const SubjectOffline:SUBJECTOFFLINE[] = [
    {
        name:'Toán Học',
        courses:[{ 
            type:'ToanHocScreen',
            name:'Toan Hoc by Neon',
          hard:3,
            quiz:[
                {
                    quizImage:
                  'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/312562750_1070484970289324_7522105326220158031_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=WE48oEjeQegAX-8r-5s&_nc_ht=scontent-hkt1-1.xx&oh=03_AdROl5h39dM2QJVJdkxH5CvCekQa3aER4TLaHVaoiR60rQ&oe=6399C2AA',
                    answer:['y = sinx','y = cosx','y = tan x','y = cotx'],
                    CorrectAnswer:'y = cosx',
                    solution:'Sử dụng định nghĩa để kiểm tra tính chẵn, lẻ. Ta có hàm số chẵn là y = cosx'
                },
                {
                    quizImage:
                    'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/313360433_1310866142999990_8360666072722146459_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wIN9qzUhc6QAX9_sB9b&_nc_ht=scontent-hkt1-1.xx&oh=03_AdRFR_ZuX8SUMSDJXu7gXWho6kNwgRmoxTryGbS-ABASRQ&oe=6399BF95',
                    answer:['y = cosx + (sinx)²','y = sin x + cosx','y = -cosx ','y = sinx.cos3x'],
                    CorrectAnswer:'y = sinx.cos3x',
                    solution:'Ta có sin(-x).cos(-3x) = -sinx.cos3x'
                },
                {
                    quizImage:
                    'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/313909241_1534867176943057_2008093130022931376_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=E-JQbgNy8r8AX_ZJDVz&_nc_ht=scontent.fhan3-5.fna&oh=03_AdRZin1kUW5isLbkY2-oB1FVrdmKkXxifEF4aXJ_z2PHYw&oe=6399B1B5',
                    answer:['y=cot4x','y=(sinx + 1)/cosx','cot²x','y=|cotx|'],
                    CorrectAnswer:'y=cot4x',
                   
                    solution:'Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ. Bằng cách kiểm tra tính chẵn, lẻ ta có y = cot4x là một hàm số lẻ.'

                },
                {
                    quizImage:
                    'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/313851303_3449436378712376_3027714609028886001_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RBPOqwoT--kAX-Wq6nQ&_nc_ht=scontent-hkt1-2.xx&oh=03_AdSIqCn8LcjHIsnkCBBbeaUVYWSyCt91EiMFX9EpEOg8bA&oe=6399B3DD',
                    answer:['f(x) là hàm số chẵn, g(x) là hàm số lẻ.',
                    'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    'f(x) là hàm số chẵn, g(x) là hàm số chẵn.',
                    ' f(x) và g(x) đều là hàm số lẻ.'
                ],
                    CorrectAnswer:'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    solution:'Ta có sin(-2x) = -sin 2x, tan²(-x) = tan²x.'
                }
            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toan Dai So',
            hard:5,
            quiz:[

            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toan Hinh Hoc',
          hard:1,
            quiz:[

            ]
        },
        
    ],
        icon:
        'https://img.icons8.com/nolan/344/math.png',
        id:"ToanHocScreen",
        num: 1,
        
    },
    {
        name:'Văn Học',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/literature.png', 
        id:"VanHocScreen",
        num: 2,
    },
    {
        name:'Hóa',
        courses:[],
        icon:
        'https://img.icons8.com/external-fauzidea-gradient-fauzidea/344/external-chemistry-back-to-school-fauzidea-gradient-fauzidea.png', 
        id:"HoaHocScreen",
        num: 3,
    },
    {
        name:'Vật Lí',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/physics.png',
        id:"VatLiScreen",
        num: 4,
    },
    {
        name:'Lịch Sử',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/order-history.png',
        id:"LichSuScreen",
        num: 5,
    },
    {
        name:'Địa Lí',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/geography.png',
        id:"DiaLiScreen",
        num: 6,
    },{
        name:'Tin Học',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/hardworking--v1.png',
        id:"TinHocScreen",
        num: 7,
    },{
        name:'Tiếng Anh',
        courses:[],
        icon:
        'https://img.icons8.com/nolan/344/abc.png',
        id:"TiengAnhScreen",
        num: 8,
    }

]