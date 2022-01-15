import Home from "../Screens/Home";
import Trending from "../Screens/Trending";
import Favourite from "../Screens/Favourite";
import RestaurantDetails from "../Screens/RestaurantDetails";
import Orders from "../Screens/Orders";
import Search from "../Screens/Search";



const MainStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}></Stack.Screen>
            
            <Stack.Screen
                name="Trending"
                component={Trending}
                options={{ headerShown: false }}></Stack.Screen>
            
            <Stack.Screen
                name="Favourite"
                component={Favourite}
                options={{ headerShown: false }}></Stack.Screen>
            
            <Stack.Screen
                name="RestaurantDetails"
                component={RestaurantDetails}
                options={{ headerShown: false }}></Stack.Screen>
            
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{ headerShown: false }}></Stack.Screen>

            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}></Stack.Screen>
            
            



        </Stack.Navigator>



        )
}
export default MainStackNavigator;

