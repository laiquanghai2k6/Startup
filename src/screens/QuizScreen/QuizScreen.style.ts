import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors"


export default  StyleSheet.create({



    container: {
      backgroundColor: Colors.light.white,
      padding: 10,
      flexGrow: 1,
    },
    question: {
      fontSize: 20,
      fontWeight: '500',
      marginVertical: 10
    },
    questionImage: {
  
      width: '100%',
      height: 300,
  
    },
    choicesContainer: {
      marginTop: 'auto'
    },
    answerBox: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding:10,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      backgroundColor: Colors.light.background,
      width: '100%',
      borderColor: Colors.light.primary,
      borderWidth:1,
      borderBottomWidth:0,
      shadowColor:'#000',
      shadowOffset: {
        width: 2,
        height:6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    correctAnswerBox: {
      borderColor:Colors.light.primary,
      backgroundColor:Colors.light.background,
    },
    wrongAnswerBox: {
      borderColor:Colors.light.secondary,
      backgroundColor:Colors.light.backgroundError,
    },
    correctTitle:{
      fontSize:16,
      color:Colors.light.primary,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    wrongTitle:{
      fontSize:16,
      color:Colors.light.secondary,
      fontWeight: 'bold',
      marginVertical: 10,
    },
  })