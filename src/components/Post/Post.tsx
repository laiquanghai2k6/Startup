import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../../assets/data/post'
import { AddComment, AddLike, AddNewFeed, Comment, newFeedActions, selectNewFeed } from '../../slice/newFeedSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { USERS } from '../../../assets/data/userStory'
import { saveActions } from '../../slice/savePostSlice'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { selectPost } from '../../slice/setPost'
import axios from 'axios'
import { selectUserName } from '../../slice/setUser'
import { SetUpdatePostAction } from '../../slice/updatePost'

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
// { "post": { 
//     "caption": "testing", 
//     "created": "lQH",
//      "image": "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=%2bU0uEh1wh7WEHg&pid=ImgRaw&r=0",
//       "likes": 10,
//        "postId": 1 
//     } 
// }


const Post = (posts: any) => {


    const comment = useAppSelector(selectPost)
    const commentId = comment.comment.filter((c) => c.postId == posts.post.postId)
    return (
        <View style={{ marginBottom: 30, }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={posts.post} />
            <PostImage post={posts.post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <View >
                    <PostFooter post={posts.post} num={posts.post.postId} />
                    {/* <Likes post={post} /> */}
                    <Caption post={posts.post} />
                    {/* <CommentsSection post={post} />  */}

                    <Comments post={posts.post} num={posts.post.postId} commentId={commentId} />

                </View>
            </View>

        </View>
    )


}



const PostHeader = ({ post }: any) => {
        const user = useAppSelector(selectUserName)
        // user.allUser.map((u)=>console.log(u.tai_khoan))
        const userImage = user.allUser.find((u)=>{
           return u.tai_khoan == post.created
        }
        
    )
    // console.log("end")
    // console.log("userImage",userImage)
    return (
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                    source={{ uri: userImage.image }}
                    style={styles.story}
                />
                <Text style={styles.nameUserPost}>
                    {post.created}

                </Text>

            </View>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
        </View>
    )
}

const PostImage = ({ post }: any) => {
    // console.log(post.image)
    return (
        <View style={{
            width: '100%',
            height: post.image != "data:image/jpeg;base64," ? 350: 10,
        }}>
            <Image source={{ uri: post.image }}

                style={{ height: '100%', resizeMode: 'cover' }}
            />
        </View>
    )
}

const PostFooter = ({ post, num }: any) => {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={[styles.leftFooterIconsContainer]}>
                
                <IconLike

                    imgStyle={styles.footerIcon}
                    imgUrl={[postFooterIcons[0].imageUrl,
                    postFooterIcons[0].likedImageUrl]}
                    post={post}
                    num={num}
                />
               
                    <IconComment
                        imgUrl={postFooterIcons[1].imageUrl} post={post} />


               
            </View>

            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <IconSave
                    post={post}
                />
            </View>

        </View>
    )
}
const IconSave = ({ post }: any) => {
    const dispatch = useAppDispatch()
    const onPress = () => {



        dispatch(saveActions.savePost(post))

        Alert.alert(
            'Lưu thành công!',
            '',
            [
                {
                    text: 'Ok',
                    onPress: () => { }

                },

            ]
        );

    }

    return (
        <TouchableOpacity onPress={onPress}>

            <Image
                style={styles.footerIcon}
                source={{ uri: postFooterIcons[3].imageUrl }}
            />

        </TouchableOpacity>
    )
}

const IconLike = ({ imgStyle, imgUrl, post,num }: any) => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(selectNewFeed)
    const [liked, setLiked] = useState(false)
    const bruh = () => {
      
        const urlUpdate = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/updateLike'
     
        dispatch(SetUpdatePostAction.setupdatelikes(1))

        axios.post(urlUpdate, {
           postId:num,
           likes:post.likes + 1
        }).then((res) => {
            console.log('updated like')


        }).catch(e => console.log(e))


            setLiked(!liked)

        
    }
    return (
        <View >
            <TouchableOpacity onPress={bruh} disabled={liked}>
                <Image style={imgStyle}
                    source={{ uri: liked ? imgUrl[1] : imgUrl[0] }}
                />

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>

                    {post.likes} Likes

                </Text>
            </View>


        </View>
    )
}
const IconComment = ({ imgUrl, post }: any) => {

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


const Comments = ({ post, num, commentId }: any) => {
    const [text, setText] = useState("");
    const [numberComment, setNumberComment] = useState(2);
    const dispatch = useAppDispatch()
    const userIds = useAppSelector(selectUserName)
    const updatedComment = useAppSelector(selectPost)
    const sendComment = () => {
        console.log('a')
        const urlUpdate = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/updateComment'
        const data = {
            content: text,
            userId: userIds.user,
            postId: num,
        }
        dispatch(SetUpdatePostAction.setupdatecomment(data))

        axios.post(urlUpdate, {
            content: text,
            userId: userIds.user,
            postId: num,
        }).then((res) => {



        }).catch(e => console.log(e))

        setText("")
        // dispatch(newFeedActions.updateComment(cmt))

    }
    return (
        <>
            {commentId.map((comment: any, index: number) => {
                if (index < numberComment) return (
                    <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>
                            <Text style={{ fontWeight: '800' }}>{comment.userId}:</Text>
                            {' '}{comment.content}
                        </Text>
                    </View>
                )


            })}
            {updatedComment.comment.map((comment,index) => {
                <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: 'white' }}>
                        <Text style={{ fontWeight: '800' }}>{comment.userId}:</Text>
                        {' '}{comment.content}
                    </Text>
                </View>
            })}
            {/* <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>
                            <Text style={{ fontWeight: '800' }}>asd:</Text>
                            {' '}nhu cc
                        </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>
                            <Text style={{ fontWeight: '800' }}>adasd:</Text>
                            {' '}nhuasda
                        </Text>
            </View> */}
            <View style={{ marginTop: 5 }}>
                {/* {post.comments.length > 2 ? ( */}
                {commentId.length > 2 ? (
                    <TouchableOpacity onPress={() => {
                        setNumberComment(numberComment + 5)
                    }}>
                        <Text style={{ color: 'gray' }}>
                            Xem thêm bình luận

                        </Text>
                    </TouchableOpacity>
                ) : (
                    null
                )}
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.select({
                    ios: 30,
                    android: 20,
                })}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <TextInput
                        style={styles.textComment}
                        placeholder='Viết bình luận...'
                        placeholderTextColor='gray'

                        multiline={true}
                        value={text}

                        onChangeText={(val) => setText(val)}
                    />
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={sendComment}
                    >
                        <Image
                            source={{ uri: 'https://img.icons8.com/nolan/344/1A6DFF/C822FF/sent.png' }}
                            style={{ width: 35, height: 35 }}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    const navigation = useNavigation()
    // const onl = post.linkingCourse.online ? "Học Online" : "Học Offline"
    return (
        <View style={{ marginTop: 5 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>{post.created}</Text>
            <Text style={{ color: 'white' }}>{post.caption}</Text>
            {/* <TouchableOpacity onPress={() => {
                if (post.linkingCourse.online) {
                    navigation.navigate("QuestionScreen", { id: post.linkingCourse.name })
                } else {
                    navigation.navigate("QuestionOfflineScreen", { id: post.linkingCourse.name })
                }
            }}>
                <Text style={{ color: '#099bff', textDecorationLine: 'underline' }}>{onl} - {post.linkingCourse.subject} - {post.linkingCourse.name}</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const CommentsSection = ({ post }: any) => {
    return (
        <View style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'gray' }}>
                    Đọc {post.comments.length > 1 ? 'tất cả' : ''} {post.comments.length}{' '}
                    {post.comments.length > 1 ? 'bình luận' : 'bình luận'}

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
    },
    shareIcon: {
        transfrom: [{ rotate: '320deg' }],
        marginTop: -3,
    },
    textComment: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: 'gray',
        // paddingLeft: 10,

        height: 'auto',
        flex: 1,
        marginRight: 15,
        padding: 5,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 30

    }
})


export default Post

