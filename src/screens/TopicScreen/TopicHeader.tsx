import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'

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

const TopicHeader = ({title,id}: {title: string; id: string}) => {
  const [gradientIndex,setGradientIndex] = React.useState(0);
  
  const gradient = useMemo(
   
   ()=> gradients[Math.floor(Math.random() * gradients.length)],
   [title]
  )

    // console.log(kindaRandomNumber("0",gradients.length));

  return (
    <LinearGradient
        // Background Linear Gradient
        // colors={['#00F260', '#0575E6']}
        colors={gradient}
        style={styles.backgroundHeader}

      ><Text style={styles.titles}>{title}</Text>
        <Text style={styles.subtitle}>JS 101</Text>
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
      height: 200,
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
      color:Colors.light.darkL
    },
})

export default TopicHeader;