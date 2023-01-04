import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import {useNavigation} from '@react-navigation/native';



const NavOptions = () => {

    const navigation= useNavigation();
    const data=[{
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreens'
    },
    // {
    //     id:'456',
    //     title:'Order food',
    //     image:'https://links.papareact.com/28w',
    //     screen:'EatScreen' 
    // }
]
  return (
    <View>
      <FlatList
      data={data}
      horizontal
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pt-4 bg-gray-100 m-10`}>
            
            <View>
                <Image style={
                    {width:120,height:120 ,resizeMode:'contain'}
                }
                source={{uri:item.image}}
                />
                <Text style={tw`text-lg mt-2 ml-2 font-semibold`}>{item.title}</Text>
                
                
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default NavOptions