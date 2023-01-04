import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import HomeScreens from './screens/HomeScreens';
import { store } from './store';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreens from './screens/Mapscreens';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <Provider store={store}>
   <NavigationContainer>
   <SafeAreaProvider>
   <Stack.Navigator>
    <Stack.Screen
    name='HomeScreens'
    component={HomeScreens}
    options={{headerShown:false}}
    />
    <Stack.Screen
    name='MapScreens'
    component={Mapscreens}
    options={{headerShown:false}}
    />
   </Stack.Navigator>
    </SafeAreaProvider> 
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'blue',
  }
});
