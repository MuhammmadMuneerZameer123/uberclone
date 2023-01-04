import { View, Text,StyleSheet,SafeAreaView,Image, Button } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'

const HomeScreens = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View>
         <Image source={{uri:'data:image/png;base64,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'}} style={styles.image}/>
         <NavOptions/>
    </View>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
    text:{
        color:'blue',
    },
    image:{
        width:150,
        height:150,
        resizeMode:'contain',
        // flex:1,
        display:'flex',
        justifyContent:'center',
    }

})
export default HomeScreens