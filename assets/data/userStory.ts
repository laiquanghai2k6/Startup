import { ChatType } from '../../src/slice/MessengerSlice';
import { Image } from 'react-native';
import { CHAT } from './chats'

export interface User{
  user:string,
  image:string,
  chat:ChatType,
  
}
export const USERS: User[]= [
  {
    user: 'Tuệ Linh',
    image:
    'https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/304864110_778422656815483_1118918160762764963_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4RQSUVcGg5kAX96BXLA&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8Oi4MbGWUx29r-qD1n4y7ERDmy7izy7O-UQgwyr_GiRg&oe=634188C1',

    chat:{
      num:1,
      mes:[
      {
        key: 1,
        message:'yo',
        type:'mes',
      },
    
    ]
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
    }
  },
  {
    user: 'Tlinh',
    image:
    'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/301931431_778405700150512_7665795004894721373_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=J_TeQ_-8LlQAX9WceWe&_nc_oc=AQlYmp-s6DMwsWwTF71ULAbho3iCQFK9Umb1DRL4Tja99pvvuzCL0EShd9YRcPy7kj_DNwBzixgwvBi26o_XlNsi&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8ZmSbYWz3JWUKKF18nw-Q3RC5qoUcTh30-0-gQyOSTSA&oe=6340BEAD',
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
    }
  },
] 