import { Image } from 'react-native';

export interface QUIZ{
    text:string,
    quizImage:string
    answer: Array<string>
    CorrectAnswer:string
}

export interface RATE{
    totalLearned:number,
    totalRateScore:number
}
export interface RATE_PAYLOAD{
    TotalRateScore:number,
    idSubject:string,
    idCourse:string
}

export interface COURSE{
    type:string,
    name:string,
    created:string,
    password:string,
    quiz:QUIZ[],
    rate:RATE,
    classes:string,

}

export interface SUBJECT{
    name:string,
    courses:COURSE[],
    icon:string,
    id:string,
    num:number
    
}

export  const Subject :SUBJECT[] = [
    {
        name:'Toán Học',
        courses:[{ 
            type:'ToanHocScreen',
            name:'Toan Hoc by Neon',
            created:'NeonLai',
            password:"abc",
            classes:"7",
            rate:{
                totalLearned: 5,
                totalRateScore:10,
            },
            quiz:[
                {
                    text:"ádasd",
                    quizImage:
                  'https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/310318752_845974270116870_643861442677839559_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KEcsNMmJTX8AX9zXKvQ&_nc_ht=scontent.fhan4-3.fna&oh=03_AVIozvlR7tcIrJRHoUbb4j937-c9ENcdr8qR3-CvJNWH2Q&oe=63638DE0',
                    answer:['1','2','3','4'],
                    CorrectAnswer:'1'
                },
                {
                    text:"ádasd",

                    quizImage:
                    'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/310432895_833555020989220_2053023898912571081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HegwifF7AY4AX8I_nYD&_nc_ht=scontent.fhan3-3.fna&oh=03_AVJuMHJEbGKd0RW_as0bVIePkP3mLJ0Cxin0f1QIh21D5A&oe=63625F67',
                    answer:['1','2','3','4'],
                    CorrectAnswer:'2'
                },
                {
                    text:"ádasd",
                    quizImage:
                    'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/310235082_819196529215442_2101347548757006678_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=gO_Lx7tdO80AX_cCFdf&_nc_ht=scontent.fhan3-4.fna&oh=03_AVLGWa1whycuf65Nd_JyB7_BUKnOz2AW3-0NR7GnKMYw1Q&oe=63624DB9',
                    answer:['1','5','3','4'],
                    CorrectAnswer:'5'
                },
                {
                    text:"ádasd",
                    quizImage:
                    'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/310341360_513882543902457_1110638748662426962_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rI8-zMfNS3AAX8Eidz2&_nc_ht=scontent.fhan3-3.fna&oh=03_AVKhzp24vYCBG2bcY0J9ASj-qhOtCQ58pFKX4C5PwVJKkA&oe=6362B451',
                    answer:['-1','-2','-3','-4'],
                    CorrectAnswer:'-4'
                }
            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toan Dai So',
            created:'laihaijkl',
            classes:"7",
            password:"",
            rate:{
                totalLearned: 0,
                totalRateScore:0,
            },
            quiz:[

            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toan Hinh Hoc',
            created:'lqh@123',
            classes:"7",
            password:"",
            rate:{
                totalLearned: 0,
                totalRateScore:0,
            },
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