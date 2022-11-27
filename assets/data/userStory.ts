import { ChatType } from '../../src/slice/MessengerSlice';
import { Image } from 'react-native';
import { CHAT } from './chats'

export interface PROFILE{
  trophys:number,
  name:string,
  gmail:string,
  phoneNumber:string,
  lived:string,
  school:string,
  favouriteSubject:string,
  favourite:string
}

export interface User{
  user:string,
  image:string,
  chat:ChatType,
  profile:PROFILE
  
}
export const USERS: User[]= [
  {
    user: 'Zoro',
    image:
'https://th.bing.com/th/id/R.13efc72a0bfdd9b845e1c2e88b10e49d?rik=VjIyHioonwZR8Q&pid=ImgRaw&r=0',
    chat:{
      num:1,
      mes:[
      {
        key: 1,
        message:'yo',
        type:'mes',
      },
    
    ]
  },
  profile:{
    trophys:4302,
    name:'Zoro Roronoa',
    gmail:'lqhjlk@gmail.com',
    phoneNumber:'0393679721',
    lived:'Tỉnh Hưng Yên,Huyện Khoái Châu,Đồng Tiến',
    school:'THPT Khoái Châu',
    favouriteSubject:'Tiếng Anh',
    favourite:'Nấu ăn',
  }

  },
  {
    user: 'lqhpro',
    image:
      'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/305787495_1686778681709169_8459930738253808315_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=I6uTY4WX8_YAX_ixnB7&_nc_ht=scontent.fhph1-2.fna&oh=03_AVJolBH1S9KPUBm3GB-REkeB89s_AOTmPM7H-sdNNv5y-w&oe=6341E3B4',
      chat:{
        num:2,
        mes:[
        {
          key: 1,
          message:'bro2',
        type:'mes',

        },
        {
          key:2,
          message:'non',
        type:'mes',

        },
        {
          key: 1,
          message:'Damn Bro',
        type:'mes',

        },
      ]
    },
    profile:{
    
    }
  },
  {
    user: 'Zoro2',
    image:
'https://th.bing.com/th/id/R.13efc72a0bfdd9b845e1c2e88b10e49d?rik=VjIyHioonwZR8Q&pid=ImgRaw&r=0',

          chat:{
        num:3,
        mes:[
        {
          key: 1,
          message:'bro3',
        type:'mes',

        },
        {
          key:2,
          message:'non',
        type:'mes',

        },
        {
          key: 1,
          message:'dạo này ok no girl ?',
        type:'mes',

        },
      ]
    },
    profile:{
    
    }
  },
  {
    user: 'lqhjkl',
    image:
      'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',
      chat:{
        num:4,
        mes:[
        {
          key: 1,
          message:'bro4',
        type:'mes',

        },
        {
          key:2,
          message:'non',
        type:'mes',

        },
        {
          key: 1,
          message:'👍',
        type:'mes',

        },
      ]
    },
    profile:{
    
    }
  },
  {
    user: 'neonlai',
    image:
      'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/305534034_1041225203252264_4489429143878903354_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PIiWCVg8hQoAX9THqZ7&_nc_ht=scontent.fhph1-3.fna&oh=03_AVIdjfploOZfx352KX0AuNo8aKf9sQ6qcLogN95XKMp37Q&oe=63422733',
      chat:{
        num:5,
        mes:[
        {
          key: 1,
          message:'bro5',
        type:'mes',

        },
        {
          key:2,
          message:'non',
        type:'mes',

        },
        {
          key: 1,
          message:'have fun man !',
          type:'mes',

        },
      ]
    },
    profile:{
    
    }
  },
] 