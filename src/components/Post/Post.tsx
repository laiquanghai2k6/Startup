import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../../assets/data/post'

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
            <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentsSection post={post} />
            <Comments post={post} />
            </View>
        </View>
    )
  
   
}



const PostHeader = ({ post }: any) => {
    return (
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: post.profilePicture }}
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

const PostFooter = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <View style={styles.leftFooterIconsContainer}>
                <Icon
                    imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}
                />
                <Icon
                    imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}
                />
                <Icon
                    imgStyle={[styles.footerIcon,styles.shareIcon]} imgUrl={postFooterIcons[2].imageUrl}
                />  
            </View>
            <View style={{alignItems:'flex-end',flex:1}}>
                <Icon imgStyle={styles.footerIcon}
                imgUrl={postFooterIcons[3].imageUrl}
                />
            </View>
        </View>
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
const Likes = ({post}: any) =>{
    return(
    <View style={{flexDirection:'row',marginTop:4}}>
        <Text style={{color:'white',fontWeight:'600'}}>

            {post.like} likes
        </Text>
    </View>
    )
}
const Caption = ({post}: any) =>{
    return (
    <View style={{marginTop:5}}>
        <Text style={{color:'white',fontWeight:'600'}}>{post.user}</Text>
        <Text style={{color:'white'}}>{post.caption}</Text>
    </View>
    )
}

const CommentsSection = ({post}: any) =>{
    return(
        <View style={{marginTop:5}}>
        {!!post.comments.length && (
        <Text style={{color:'gray'}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
            {post.comments.length > 1 ? 'comments' : 'comment'}

        </Text>
        )}
        </View>
    )
}
const Comments = ({post}: any) =>{
    return (
    <>
    {post.comments.map((comment: any,index: any)=>(
        <View key={index} style={{flexDirection:'row',marginTop:5}}>
            <Text style={{color:'white'}}>
                <Text style={{fontWeight:'600'}}>{comment.user}</Text>
                {' '}{comment.comment}
            </Text>
        </View>
    ))}
    </>

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
    leftFooterIconsContainer:{
       flexDirection:'row',
       width:'35%',
       justifyContent:'space-between' 
    },
    shareIcon:{
        transfrom: [{rotate:'320deg'}],
        marginTop:-3,
    }
})


export default Post