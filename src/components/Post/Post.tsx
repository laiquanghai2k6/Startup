import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../../assets/data/post'
import { AddComment, AddLike, AddNewFeed, Comment, newFeedActions, selectNewFeed } from '../../screens/NewFeedScreen/newFeedSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { USERS } from '../../../assets/data/userStory'
import { saveActions } from '../../screens/SavePostScreen/savePostSlice'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl:
            'https://img.icons8.com/ios/344/ffffff/like--v1.png',
        likedImageUrl:
            'https://img.icons8.com/material-outlined/344/fa314a/like--v1.png',

    },
    {
        name: 'Comment',
        imageUrl:
            'https://img.icons8.com/ios/344/ffffff/comments.png'
    },
    {
        name: 'Share',
        imageUrl:
            'https://img.icons8.com/ios/344/ffffff/sent.png',
    },
    {
        name: 'Save',
        imageUrl:
            'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/ffffff/external-Save-social-media-bearicons-detailed-outline-bearicons.png'

    }
]



const Post = ({ post }: any) => {
    



    return (
        <View style={{ marginBottom: 30, }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <View >
                    <PostFooter post={post} num={post.num} />
                    {/* <Likes post={post} /> */}
                    <Caption post={post} />
                    <CommentsSection post={post} />
                    <Comments post={post} num={post.num} />

                </View>
            </View>
        </View>
    )


}



const PostHeader = ({ post }: any) => {
    return (
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                    source={{ uri: post.profilePicture }}
                    style={styles.story}
                />
                <Text style={styles.nameUserPost}>
                    {post.user}

                </Text>

            </View>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
        </View>
    )
}

const PostImage = ({ post }: any) => {
    return (
        <View style={{
            width: '100%',
            height: 350,
        }}>
            <Image source={{ uri: post.imageUrl }}
                style={{ height: '100%', resizeMode: 'cover' }}
            />
        </View>
    )
}

const PostFooter = ({ post,num }: any) => {
    const [text, onChangeText] = React.useState("Useless Text");
   
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.leftFooterIconsContainer}>

                <IconLike

                    imgStyle={styles.footerIcon} imgUrl={[postFooterIcons[0].imageUrl, postFooterIcons[0].likedImageUrl]}
                    post={post}
                />
                <View style={{ flexDirection: 'row', marginLeft: -100 }}>
                    <IconComment
                        imgUrl={postFooterIcons[1].imageUrl} post={post} />


                    <TouchableOpacity >
                         <Image style={[styles.footerIcon,{marginLeft:10}]}
                        source={{ uri: postFooterIcons[2].imageUrl }}
            />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <IconSave 
                post={post}
                />
            </View>

        </View>
    )
}
const IconSave = ({post}: any) =>{
    const dispatch = useAppDispatch()
    const onPress = () =>{
        
        
    
        dispatch(saveActions.savePost(post))
        
            Alert.alert(
                'Lưu thành công!',
                '',
                [
                {
                text: 'Ok',
                onPress: () => {}
                
                },
                
                ]
                );
        
    }
    
    return(
        <TouchableOpacity onPress={onPress}>
         
                    <Image 
                        style={styles.footerIcon}
                        source={{uri:postFooterIcons[3].imageUrl}}
                    />

        </TouchableOpacity>
    )
}

const IconLike = ({ imgStyle, imgUrl, post }: any) => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectNewFeed)
    const [liked,setLiked] = useState(false)
    const bruh = () => {
        const add:AddLike = {
            like:post.like,
            idPost:post.num
        }

        dispatch(newFeedActions.like(add))
        setLiked(true)
    }
    return (
        <View >
            <TouchableOpacity onPress={bruh}>
                <Image style={imgStyle}
                    source={{ uri: liked ? imgUrl[1] : imgUrl[0] }}
                />

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>

                    {post.like} likes

                </Text>
            </View>


        </View>
    )
}
const IconComment = ({ imgUrl, post }: any) => {

    const [comments, setComments] = useState<Comment>(post.comments)
    const [check, setCheck] = useState(false)
    const bruh = () => {
        setCheck(true)


    }
    return (


        <TouchableOpacity onPress={bruh}>
            <Image style={styles.footerIcon}
                source={{ uri: imgUrl }}
            />

        </TouchableOpacity>




    )
}
const Comments = ({ post ,num}: any) => {
    const [text, setText] = useState("");
    
    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectNewFeed)
    console.log(text)
    return (
        <>
            {post.comments.map((comment: any, index: any) => (
                
                
                <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: 'white' }}>
                        <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                        {' '}{comment.comment}
                    </Text>
                </View>
            ))}
            <TextInput
                style={styles.textComment}
                placeholder='Write a caption...'
                placeholderTextColor='gray'
                
                multiline={true}
                value={text}
                
                onChangeText={(val)=>setText(val)}
                 

                onKeyPress={(value)=>{
                
                    
                    if(value.nativeEvent.key == "Enter"){
                        
                        const cmt: AddComment= {
                            comment:{
                                user:USERS[2].user,
                                comment:text
                            },
                            idPost :num
                            
                        }
                        setText("")
                                 
                        

                        
                        dispatch(newFeedActions.updateComment(cmt))

                                     
                    }
                    // console.log(values)
                    
                    
                }}
                
                
                
                
                

            />
        </>


    )
}

const Icon = ({ imgStyle, imgUrl }: any) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle}
                source={{ uri: imgUrl }}
            />
        </TouchableOpacity>
    )
}
// const Likes = ({post}: any,) =>{
//     return(
//     <View style={{flexDirection:'row',marginTop:4}}>
//         <Text style={{color:'white',fontWeight:'600'}}>

//             {post.like} likes

//         </Text>
//     </View>
//     )
// }
const Caption = ({ post }: any) => {
    return (
        <View style={{ marginTop: 5 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>{post.user}</Text>
            <Text style={{ color: 'white' }}>{post.caption}</Text>
        </View>
    )
}

const CommentsSection = ({ post }: any) => {
    return (
        <View style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'gray' }}>
                    View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
                    {post.comments.length > 1 ? 'comments' : 'comment'}

                </Text>
            )}
        </View>
    )
}



const styles = StyleSheet.create({
    postContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,

        borderWidth: 1.6,
        borderColor: '#FFEECC'
    },
    nameUserPost: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '600'
    },
    footerIcon: {
        width: 30,
        height: 30,

    },
    leftFooterIconsContainer: {
        // marginRight:,
        // backgroundColor:'white',

        flexDirection: 'row',
        width: '35%',
        justifyContent: 'space-between'
    },
    shareIcon: {
        transfrom: [{ rotate: '320deg' }],
        marginTop: -3,
    },
    textComment: {
        color: 'white',
        fontSize: 16,
        height:'auto',
        width:'auto',
        // backgroundColor:'white',
        marginTop:10,
        borderWidth:2,
        borderColor:'gray',
        borderRadius:15,
        paddingLeft:10,
        
        
    }
})


export default Post

