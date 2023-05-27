import React from "react";
import {View,Text,Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screen/homeScreen";
import Profile from "../screen/profileScreen";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Stacknavigator=()=>{
    return (
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            
          headerTitle: () => (
            <View style={{flexDirection:'row',}}>
                <View>
            <Image
              source={require('../assets/insta2.png')}
              style={{ width: 100, height: 100 }}
            />
            </View >
            <View style={{flexDirection:'row',left:240}}>
        <Entypo name="heart-outlined" size={24} color="black"
        style={{top:35,right:35}}

    />
    <MaterialCommunityIcons name="facebook-messenger" size={24} color="black"
    style={{top:35,right:10}}
    
    />
</View>

            
</View>
          ),
          
          
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      
    
    )
}
export default Stacknavigator;
