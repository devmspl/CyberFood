/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trending from './src/Screens/Trending';
import Favourite from './src/Screens/Favourite';
import RestaurantDetails from './src/Screens/RestaurantDetails';
import Orders from './src/Screens/Orders';
import Search from './src/Screens/Search';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home/>
     
    </View>
  );
}


function TrendingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Trending />

    </View>
  );
}

function FavouriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Favourite />

    </View>
  );
}

function RestaurantDetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RestaurantDetails />

    </View>
  );
}

function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Orders />

    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Search />

    </View>
  );
}



const Tab = createBottomTabNavigator();




// const App = () => {
//   return (
//     <View>
//       <Home/>
      
//     </View>
//   )
// }

function MyTabs({ navigation }) {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name = 'Home' component={HomeScreen} />
      <Tab.Screen name='Trending' component={TrendingScreen} />
      <Tab.Screen name='Favourite' component={FavouriteScreen} />
      <Tab.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />

     </Tab.Navigator>
  );
}
//export default App;

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
     
    </NavigationContainer>

   
  );
}




