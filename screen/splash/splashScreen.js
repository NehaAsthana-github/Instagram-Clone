import { View, Text,Image,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Insta from '../../assets/insta.png'
import Meta from '../../assets/meta.png'
const SplashScreen = ({setStatus}) => {
    const [appisready,setAppisready]=useState(false)
    useEffect(()=>{
    async function prepare(){
       try{
        await new Promise(resolve=>setTimeout(resolve,10000));
        setStatus(true)
       }
       catch(e){
        console.warn(e)
       }
       finally{
        setAppisready(true)
       }
    } 
    prepare()

    },[])
    if(!appisready){
        return (

            <View style={styles.container}>
              <Image source={Insta} alt='image errer' />
              <Image source={Meta} style={{width:300,height:50,top:160}}  alt='image errer' />
            </View>
          )
        
    }
    else{
        return null;
    }
  
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    meta:{
        marginTop:50,
        color:'pink'
    }
  });
  
  