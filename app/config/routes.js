import { StatusBar } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen"

export default StackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        }
    },
    {
        headerMode: 'float',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
)