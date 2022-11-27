import { Auth, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../models";
import { registerForPushNotificationsAsync } from "../utils/pushNotifications";


const UserContext = createContext<{sub:string,email:string}>({
    email:"",
    sub:""});

const UserContextProvider = ({children}: any) => {
    const [email,setEmail] = useState<string>("aasd");
    const [sub,setSub] = useState<string>("");
    // const [user,setUser] = useState<User>();
    // const [expoToken,setExpoToken] = useState<string>();
    // useEffect(()=>{
    //     (async ()=> {
    //         const userData = await Auth.currentAuthenticatedUser();
            
    //         setSub(userData.attributes.sub)
    //         setEmail(userData.attributes.email)

    //         const users = await DataStore.query(User);
    //         const me = users.find((user)=> user.sub === userData.attributes.sub);
    //         if(me){
    //         setUser(me);

    //         }else{
    //             const newUser = new User({
    //                 sub:userData.attributes.sub
    //             });
    //             const saved = await DataStore.save(newUser);
    //             setUser(saved)
               
    //         }
    //     })()
    // },[])


    // useEffect(() => {
    //     (async () => {
    //       const token = await registerForPushNotificationsAsync();
    //       setExpoToken(token)
    //     })()
    //   }, [])
      
    //  useEffect(()=>{
    //     (async ()=>{
    //         if(user && expoToken && user.expoNotificationToken !== expoToken){
    //             const updatedUser = await DataStore.save(
    //                 User.copyOf(user,(updated) => {
    //                     updated.expoNotificationToken = expoToken;
    //                 })

    //             )
    //             setUser(updatedUser)
    //         }
            
    //     })()
    // },[user,expoToken]) 
       

    return <UserContext.Provider value={{sub,email}}>{children}</UserContext.Provider>
};
export default UserContextProvider;

export const useUserContext = () => useContext(UserContext)
