import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectUserName } from '../../slice/setUser'
import Colors from '../../constants/Colors'

const ngrok = 'https://5351-2001-ee0-481f-3b0-880c-fc56-1e9c-a0f9.ap.ngrok.io'


const RankingScreen = () => {
    const user = useAppSelector(selectUserName)
    // user.allUser.map((u, i) => {
    //     console.log(i)
    //     console.log(u.tai_khoan)
    // })

    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'center' }}
            source={{ uri: 'https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '800', marginTop: 50, alignSelf: 'center', paddingBottom: 20 }}>Bảng Xếp Hạng Điểm Số</Text>
            <ScrollView>
                
                    {user.sortUser.map((u, i) => {


                        // return(
                        if(i+1 == 1){
                            return (
                              
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20 }}>                      
                             <ImageBackground source={{uri:'https://img.icons8.com/emoji/512/yellow-circle-emoji.png'}}
                                     style={{width:30,height:30,alignItems:'center',justifyContent:'center'}}
                                     >
                                     <Text style={{color:'white'}}>{i+1}</Text>

                                     </ImageBackground>
                                 
                                <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{u.tai_khoan} ({u.score}</Text>
                                <Image
                                    source={{ uri: 'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png' }}
                                    style={{ width: 20, height: 20 }} />
                                    <Text style={{fontWeight:'800',fontSize:16,color:'white'}}>)</Text>    
                                    <Image source={{uri:ngrok+'/i/'+u.image}}
                                    style={styles.avatar}
                                    />                               
                                </View>
                                    
                                )
                        }
                         if(i+1 == 3){
                            return (
                                      
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20 }}>                      

                            <ImageBackground source={{uri:'https://img.icons8.com/emoji/512/brown-circle-emoji.png'}}
                                    style={{width:30,height:30,alignItems:'center',justifyContent:'center'}}
                                    >
                                    <Text style={{color:'white'}}>{i+1}</Text>

                                    </ImageBackground>
                                   
                               <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{u.tai_khoan} ({u.score}</Text>
                               <Image
                                   source={{ uri: 'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png' }}
                                   style={{ width: 20, height: 20 }} />
                                   <Text style={{fontWeight:'800',fontSize:16,color:'white'}}>)</Text>    
                                   <Image source={{uri:ngrok+'/i/'+u.image}}
                                    style={styles.avatar}
                                    />                                  
                                   </View>
                            )
                        }
                        if(i+1==2){
                            return (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20 }}>                      
                            

                            <ImageBackground source={{uri:'https://img.icons8.com/emoji/512/black-circle-emoji.png'}}
                                    style={{width:30,height:30,alignItems:'center',justifyContent:'center'}}
                                    >
                                    <Text style={{color:'white'}}>{i+1}</Text>

                                    </ImageBackground>
                                   
                               <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{u.tai_khoan} ({u.score}</Text>
                               <Image
                                   source={{ uri: 'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png' }}
                                   style={{ width: 20, height: 20 }} />
                                   <Text style={{fontWeight:'800',fontSize:16,color:'white'}}>)</Text>     
                                   <Image source={{uri:ngrok+'/i/'+u.image}}
                                    style={styles.avatar}
                                    />                                 
                                   </View>
                            )
                        }
                        if(i+1!=1 && i+1!=2&&i+1!=3){
                            
                            return (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20 }}>                      
                                
    
                                <ImageBackground source={{uri:'https://img.icons8.com/emoji/512/white-circle-emoji.png'}}
                                        style={{width:30,height:30,alignItems:'center',justifyContent:'center'}}
                                        >
                                        <Text style={{color:'black'}}>{i+1}</Text>
    
                                        </ImageBackground>
                                       
                                   <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{u.tai_khoan} ({u.score}</Text>
                                   <Image
                                       source={{ uri: 'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png' }}
                                       style={{ width: 20, height: 20 }} />
                                       <Text style={{fontWeight:'800',fontSize:16,color:'white'}}>)</Text> 
                                       <Image source={{uri:ngrok+'/i/'+u.image}}
                                    style={styles.avatar}
                                    />                                     
                                       </View>
                                )
                        }
                        
                           
                         


                         

        
                        })}
        </ScrollView>
      {/* <Text>asdahsidjasdi</Text> */ }
      </ImageBackground >
  )
}

export default RankingScreen

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: Colors.light.background,
        width: 30,
        height: 30,
        borderRadius: 150,
        marginLeft:8,
        
      },
})