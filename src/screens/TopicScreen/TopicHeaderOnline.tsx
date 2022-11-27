import { View, Text ,StyleSheet,Image} from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'
import { SCORE } from '../../../assets/data/score'
import { useAppSelector } from '../../redux/hook'
import { selectScore } from '../../slice/ScoreSlice'
import { selectUserName } from '../../slice/setUser'

const gradients = [
  ['#00C9FF', '#92FE9D'],
  ['#EB3349','#F45C43'],
  ['#4CB8c4','#3CD3AD'],
  ['#1FA2FF','#12D8FA','#A6FFCB'],
  ['#FF512F','#F09819'],
  ['#1A2980','#26D0CE'],
  ['#DD2476','#FF512F'],
  ['#F09819','#EDDE5D'],
  ['#E55D87','#5FC3E4'],
  ['#348F50','#56B4D3'],

]


  const kindaRandomNumber = (seed: string,max: number) => {
   return Math.floor(
      seed.split("").reduce((n,c) => n + c.charCodeAt(0),0) % max
    )
  }

const TopicHeaderOnline = () => {
  const user = useAppSelector(selectUserName)

  const [gradientIndex,setGradientIndex] = React.useState(0);
  
  const gradient = useMemo(
   
   ()=> gradients[Math.floor(Math.random() * gradients.length)],
   []
  )
  return (
    <LinearGradient
        // Background Linear Gradient
        // colors={['#00F260', '#0575E6']}
        colors={['#1FA2FF','#12D8FA','#A6FFCB']}
        style={styles.backgroundHeader}

      >
        <Text style={styles.titles}>Khóa học Online</Text>
        <View style={{flexDirection:'row',marginRight:20,alignItems:'center'}}>

        <Text style={styles.subtitle}>Số điểm hiện tại :</Text>
        <Image 
      source={{uri:'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png'}}
      style={{width:30,height:30}}
      />
      <Text style={{color:'white',fontSize:15,fontWeight:'700'}}>{user.score}</Text>
      </View>
        </LinearGradient>
  )
}

const styles = StyleSheet.create({

    
    titles: {
  
      fontSize:30,
      fontWeight:'500',
      letterSpacing:1.2,
      color:'white',
      marginVertical:10,
    },
    contentContainer: {
      padding: 10
    },
    backgroundHeader: {
      marginBottom:10,
      height: 150,
      justifyContent:'flex-end',
      padding:10,
      paddingBottom:20,
      borderBottomEndRadius:20,
      borderBottomStartRadius:20,
      overflow:'hidden',
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:7,
      },
      shadowOpacity:0.43,
      shadowRadius:9.51,
      elevation:15,
    },
    subtitle:{
      fontSize:20,
      color:'white'
    },
})

export default TopicHeaderOnline;