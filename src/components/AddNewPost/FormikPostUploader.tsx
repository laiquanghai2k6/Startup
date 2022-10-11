import { View, Text, TextInput, Image ,Button, KeyboardAvoidingView, Platform} from 'react-native'
import React, { useState } from 'react'
import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import {validUrl} from 'valid-url'
import { POSTS } from '../../../assets/data/post'
import { USERS } from '../../../assets/data/userStory'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { AddNewFeed, newFeedActions, selectNewFeed } from '../../slice/newFeedSlice'
const PLACEHOLDER_IMG =

    'https://th.bing.com/th/id/OIP.QrR56voakzVibJnCtTWw7gHaEK?pid=ImgDet&rs=1'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})



const FormikPostUploader = ({navigation}: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    // let post = {}
    const dispatch = useAppDispatch()
   const posts = useAppSelector(selectNewFeed)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: ''}}
            onSubmit={(values) => {
                  
                
                    const post: AddNewFeed = {
                        imageUrl:values.imageUrl,
                        user:USERS[2].user,
                        like:0,
                        caption:values.caption,
                        profilePicture:USERS[2].image,
                        comments:[{
                            user:USERS[3].user,
                            comment:'bruh'
                        }],
                        
                        num: posts.length+1
                        
                    }
                    
                    
                    dispatch(newFeedActions.addPost(post))
                   
                   
                    navigation.goBack()
 
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{
                        margin: 15,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
                            style={{ width: 100, height: 100 }}
                        />

                        <View style={{flex:1,marginLeft:12}}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : null}
                            style={{flex:1}}
                            keyboardVerticalOffset={Platform.select({
                            ios: 30,
                            android: 20,
                            })}
                        >
                            <TextInput
                                style={{ color: 'white', fontSize: 16 }}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </KeyboardAvoidingView>
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />

                    <TextInput
                        onChange={e=> setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 13 }}
                        placeholder='Enter Image Url...'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize:10,color:'red'}}>
                            {errors.imageUrl}
                        </Text>

                    )}
                <Button 
                onPress={handleSubmit}
                title='Share'
                disabled={!isValid}
                
                />
                </>
            }

        </Formik>
    )
}

export default FormikPostUploader