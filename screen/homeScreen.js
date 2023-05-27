import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground,View,Text, Pressable } from 'react-native';
import Profile from "./profileScreen";
const Home =({navigation})=>{
    return(
        <View style={styles.container}>
            <Pressable onPress={()=>{navigation.navigate('Profile')}}>
          <Text>Home</Text>
          </Pressable>
        </View>
    )
}
export default Home

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})